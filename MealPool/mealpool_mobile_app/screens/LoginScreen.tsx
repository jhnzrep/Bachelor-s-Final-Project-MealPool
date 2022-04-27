import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, Alert, Pressable, Linking, ScrollView, useWindowDimensions } from 'react-native';
import { CheckBox } from 'react-native-elements'

import { Platform } from 'react-native';

import Logo from '../components/Logo';
import SubmitButton from '../components/SubmitButton';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import CustomInput from '../components/CustomInput';
import CustomHeader from '../components/CustomHeader';


export default function LoginScreen({ navigation }: RootStackScreenProps<'LoginScreen'>) {
  const window = useWindowDimensions();
  const desktop = window.width < 768;
  // State Management
  const [textInputPassword, setTextInputPassword] = React.useState({ value: '', error: 'sadasds'});
  const [textInputEmail, setTextInputEmail] = React.useState({value: '', error: ''}); 
  const [checked, toggleChecked] = React.useState(false);

  const checkTextInput = () => {
    if (!textInputPassword.value.trim()) {
      alert('Please Enter Password ');
      return;
    }

    if (!textInputEmail.value.trim()) {
      alert('Please Enter Email');
      return;
    }
    
    navigation.navigate('Index')
  };

   
  return (
    <ScrollView style={styles.scroll_container}>
      <View style={styles.container}>

        <Logo type="main" show_title={true} />

        <CustomHeader value="Sign In" />
        
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
    paddingLeft: '70px',
    paddingRight: '70px',
  },
  scroll_container: {
    width: '100%',
    
  },
  company_logo: {
    width: '282px',
    height: '236px'
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
    width: '151px',
    height: '45px',
    fontSize: 16,
    fontWeight: '600',
    color:' #FFF3DE',
    marginTop:'10px',
    marginBottom: '10px',
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
