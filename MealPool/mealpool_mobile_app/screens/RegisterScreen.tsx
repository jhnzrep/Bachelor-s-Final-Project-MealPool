import React from 'react';
import { ScrollView, StyleSheet, Image, TextInput, useWindowDimensions } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import CustomInput from '../components/CustomInput';
import DesktopNavigation from '../components/DesktopNavigation';
import Logo from '../components/Logo';
import SubmitButton from '../components/SubmitButton';

import {  View } from '../components/Themed';
import { RootStackScreenProps, RootTabScreenProps } from '../types';

export default function RegisterScreen ({ navigation }: RootStackScreenProps<'RegisterScreen'>) {
  const [fname, setFname] = React.useState({ value: '', error: ''});
  const [lname, setLname] = React.useState({ value: '', error: ''});
  const [email, setEmail] = React.useState({ value: '', error: ''});
  const [dob, setDob] = React.useState({ value: '', error: ''});
  const [address, setAddress] = React.useState({ value: '', error: ''});
  const [city, setCity] = React.useState({ value: '', error: ''});
  const [zcode, setZcode] = React.useState({ value: '', error: ''});
  const [password, setPassword] = React.useState({ value: '', error: ''});
  const [rpassword, setRpassword] = React.useState({ value: '', error: ''});
  const window = useWindowDimensions();
  const desktop = window.width < 768;


  return (
    <ScrollView>
      <View style={styles.container}>
      {
          desktop ? null :  <DesktopNavigation/>
        }
        <View style={[!desktop ? styles.custom_input_desktop_wrapper : styles.custom_input_mobile_wrapper, {marginTop: 33}]}>
          <CustomHeader  value="Sign Up" />

          <CustomInput 
          setValue={(text : string) => setFname({ value: text, error: ''})}
          error={!!fname.error}
          required={true}
          errorText="You have to fill first name"
          placeholder="First Name" 
          value={fname.value} />

          <CustomInput 
          setValue={(text : string) => setLname({ value: text, error: ''})}
          placeholder="Last Name" 
          required={true}
          error={!!fname.error}
          errorText="You have to fill last name"
          value={lname.value}/>

          <CustomInput 
          setValue={(text : string) => setEmail({ value: text, error: ''})}
          required={true}
          placeholder="Email account" 
          error={!!fname.error}
          errorText="You have to fill email account"
          value={email.value}/>

          <CustomInput 
          setValue={(text : string) => setDob({ value: text, error: ''})}
          placeholder="Zip code" 
          error={!!fname.error}
          errorText="You have to fill Date of Birth"
          value={dob.value}/>

          <CustomInput 
          setValue={(text : string) => setAddress({ value: text, error: ''})}
          placeholder="Address" 
          error={!!fname.error}
          errorText="You have to fill Address"
          value={address.value}/>


          <CustomInput 
          setValue={(text : string) => setCity({ value: text, error: ''})}
          placeholder="City" 
          error={!!fname.error}
          errorText="You have to fill city"
          value={city.value}/>

          <CustomInput 
          setValue={(text : string) => setZcode({ value: text, error: ''})}
          placeholder="Date of birth" 
          error={!!fname.error}
          errorText="You have to fill Zip code"
          value={zcode.value}/>

          <CustomInput 
          setValue={(text : string) => setPassword({ value: text, error: ''})}
          placeholder="Password" 
          error={!!fname.error}
          errorText="You have to fill password"
          required={true}
          secureTextEntry={true}
          value={password.value}/>

          <CustomInput 
          setValue={(text : string) => setRpassword({ value: text, error: ''})}
          placeholder="Repeat Password"
          error={!!fname.error} 
          required={true}
          errorText="You have to repeat password"
          secureTextEntry={true}
          value={rpassword.value}/>


          <SubmitButton
            text="Sign in" 
            showSeparator={true}
            navigation={() => navigation.navigate('LoginScreen')} 
            separator_text="Sign in"
          />
       
        </View>
        {
        !desktop ?  <Image source={require('../assets/images/main_image_desktop.svg')}  style={{height: 333, width: 639}}/>: null
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 70,
    paddingRight: 70,
  },
  custom_input_desktop_wrapper: {
    width: 330
  },
  custom_input_mobile_wrapper: {
    width: '100%'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text_input: {
    backgroundColor: 'rgba(255, 243, 222, 0.4)',
    shadowColor: 'rgba(253, 180, 65, 0.3)',
    shadowOffset: { width: 3, height: 7 },
    shadowOpacity: 0.4,
    shadowRadius: 2,  
    elevation: 12,
    borderRadius: 25,
    width: 253,
    height: 45,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 22,
    color: 'rgba(67, 45, 27, 0.4)',
    paddingHorizontal: 22,
  }
});
