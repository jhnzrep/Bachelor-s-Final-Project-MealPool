import React from 'react';
import { ScrollView, StyleSheet, TextInput } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import CustomInput from '../components/CustomInput';

import SubmitButton from '../components/SubmitButton';
import {  View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function RegisterScreen({ navigation }: RootTabScreenProps<'RegisterScreen'>) {
  const [fname, setFname] = React.useState({ value: '', error: ''});
  const [lname, setLname] = React.useState({ value: '', error: ''});
  const [email, setEmail] = React.useState({ value: '', error: ''});
  const [dob, setDob] = React.useState({ value: '', error: ''});
  const [address, setAddress] = React.useState({ value: '', error: ''});
  const [city, setCity] = React.useState({ value: '', error: ''});
  const [zcode, setZcode] = React.useState({ value: '', error: ''});
  const [password, setPassword] = React.useState({ value: '', error: ''});
  const [rpassword, setRpassword] = React.useState({ value: '', error: ''});



  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomHeader value="Sign Up" />

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
          text="Sign up" 
          navigation={() => navigation.navigate('LoginScreen')} 
          separator_text="Sign in"
        />

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
    paddingLeft: '70px',
    paddingRight: '70px',
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
    width: '253px',
    height: '45px',
    fontSize: 16,
    fontWeight: '600',
    marginTop: '22px',
    color: 'rgba(67, 45, 27, 0.4)',
    paddingHorizontal: 22,
  }
});
