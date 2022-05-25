import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, Alert, Pressable, Linking, ScrollView, useWindowDimensions } from 'react-native';
import { CheckBox } from 'react-native-elements'
import ServiceFuncs from '../services/auth_service'
import { Platform } from 'react-native';
import Logo from '../components/Logo';
import SubmitButton from '../components/SubmitButton';
import { useGlobalContext } from '../GlobalContext';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import CustomInput from '../components/CustomInput';
import CustomHeader from '../components/CustomHeader';
import DesktopNavigation from '../components/DesktopNavigation';
import Async_Storage from '../services/asyncStorage';
import AuthService from '../services/auth_service';

export default function LoginScreen({ navigation }: RootStackScreenProps<'LoginScreen'>) {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useGlobalContext()
  const [login, setLogin] = React.useState({message: "", loading: true})


  const window = useWindowDimensions();
  const desktop = window.width > 768;
  // State Management
  const [textInputPassword, setTextInputPassword] = React.useState({ value: '', error: 'sadasds'});
  const [textInputEmail, setTextInputEmail] = React.useState({value: '', error: ''}); 
  const [checked, toggleChecked] = React.useState(false);
  const checkTextInput = (e : any) => {
    e.preventDefault();
    if (!textInputPassword.value.trim()) {
      alert('Please Enter Password ');
      return;
    }
    if (!textInputEmail.value.trim()) {
      alert('Please Enter Email');
      return;
    }

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(textInputEmail.value) || textInputEmail.value.length < 6 ){
      alert('Email is in valid format')
      console.log('Email is in invalid format')
      return;
    }
    if(textInputPassword.value.length < 6 ){
      alert('Password is in valid format')
      console.log('Password is in invalid format')
      return;
    }

    ServiceFuncs.loginUser({textInputEmail,textInputPassword }).then(response=> {
      //Async_Storage.storeData(response)
      if (response == "success") {
        setIsLoggedIn(true)
        return navigation.navigate('Root', {screen: 'Index'})
      }
      alert('Login was not sucessfull.') 
    })
  };



  return (
    <ScrollView style={styles.scroll_container}>
      <View style={styles.container}>

        {
          desktop ?  <DesktopNavigation/>  : <Logo type="main" show_title={true} />  
        }

        <CustomHeader value="Sign In" />
        <View style={[!desktop ? styles.custom_input_desktop_wrapper : styles.custom_input_mobile_wrapper, {marginTop: 33}]}>
          <CustomInput 
          setValue={(text : string) => setTextInputEmail({ value: text, error: ''})}
          error={!!textInputEmail.error}
          errorText="You have to fill email"
          required={true}
          placeholder="Email account" 
          secureTextEntry={false}
          value={textInputEmail.value} />
          <CustomInput 
          setValue={(text : string) => setTextInputPassword({ value: text, error: ''})}
          placeholder="Password" 
          errorText="You have to fill password"
          required={true}
          secureTextEntry={true}
          value={textInputPassword.value}/>

          <CheckBox
          title="Remember me?"
          containerStyle ={styles.checkBox}
          checked={checked}
          />

          <SubmitButton 
          text="Sign in" 
          onPress={checkTextInput} 
          showSeparator={true}
          navigation={() => navigation.navigate('RegisterScreen')} 
          separator_text="Create a new account"
          />
        </View>

        {
        !desktop ?  <Image source={require('../assets/images/main_image_desktop.svg')}  style={{height: 333, width: 639}}/>: <Text>No Web</Text>
        }

      </View>

      {
        desktop ? <Text> WEB </Text> : <Text>No Web</Text>
      }

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    color: Colors.text_color.background,
    paddingLeft: 70,
    paddingRight: 70,

  },
  custom_input_desktop_wrapper: {
    width: 330,
    maxWidth: 1400,
    margin: 'auto'
  },
  custom_input_mobile_wrapper: {
    width: '100%'
  },
  scroll_container: {
    width: '100%',
    
  },
  login_wrapper_desktop: {
    flex: 1,
    flexDirection: 'row'
  },
  company_logo: {
    width: 282,
    height: 236
  },
  alternative_login_section: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
  separator: {
    height: 1,
    width: '40%',
    backgroundColor: Colors.dark_orange.background
  },
  checkBox: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    marginTop: 30
  },

  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  button: {
    backgroundColor: Colors.dark_orange.background,
    borderRadius: 25,
    width: 151,
    height: 45,
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF3DE',
    marginTop:10,
    marginBottom: 10,
    shadowColor: 'rgba(253, 180, 65, 0.3)',
    shadowOffset: { width: 5, height: 12 },
    shadowOpacity: 0.3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_text: {
    fontWeight: '600',
    fontSize: 16,
    color: '#FFF3DE'
  }
});
