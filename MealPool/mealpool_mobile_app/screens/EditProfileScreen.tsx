import React, { useState } from 'react';
import { ScrollView, StyleSheet, Image, TextInput, useWindowDimensions } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import CustomInput from '../components/CustomInput';

import DesktopNavigation from '../components/DesktopNavigation';
import Logo from '../components/Logo';
import SubmitButton from '../components/SubmitButton';

import {  View } from '../components/Themed';
import AuthService from '../services/auth_service';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import CustomHeader from '../components/CustomHeader';
import { useGlobalContext } from '../GlobalContext';
import UserService from '../services/user_service';
import GoBackButton from '../components/GoBackButton';

export default function EditProfileScreen ({ navigation: {goBack} }: RootStackScreenProps<'EditProfileScreen'>) {
  const [fname, setFname] = React.useState({ value: '', error: ''});
  const [lname, setLname] = React.useState({ value: '', error: ''});
  const [email, setEmail] = React.useState({ value: '', error: ''});
  const [dob, setDob] = React.useState({ value: '', error: ''});
  const [street, setStreet] = React.useState({ value: '', error: ''});
  const [city, setCity] = React.useState({ value: '', error: ''});
  const [zcode, setZcode] = React.useState({ value: '', error: ''});
  const [country, setCountry] = React.useState({ value: '', error: ''});
  const [password, setPassword] = React.useState({ value: '', error: ''});
  const [rpassword, setRpassword] = React.useState({ value: '', error: ''});
  const [phone, setPhone] = React.useState({ value: '', error: ''});
  const window = useWindowDimensions();
  const [date, setDate] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)
  const { user, setUser } = useGlobalContext()

  const desktop = window.width < 768;

  const fnameVal = fname.value
  const lnameVal = lname.value
  const emailVal = email.value
  const passwordVal = password.value
  const dobVal = new Date(2018, 0O5, 0O5, 17, 23, 42, 11)
  const streetVal = rpassword.value
  const cityVal = city.value
  const countryVal = country.value
  const postalCodeVal = zcode.value
  const phoneVal = phone.value
  

  
/*   const dobVal = dob.value
 */
  type RegisterUser = {
    fnameVal: string;
    lnameVal: string;
    emailVal: string;
    passwordVal: string;
    dobVal: Date;
    streetVal: string;
    cityVal: string;
    countryVal: string;
    postalCodeVal: string;
    phoneVal: string;
    reviewObj: Array<review>
  };
  type review = {
    stars: Number,
    comment: String
  }
  
/*   type reviewObj ={
    authorId: string,
    ratedId: string,
    stars: Number,
    comment: String
  } */
  type reviewObj ={
  }
  
  const reviewObj: reviewObj[] = [
  ]

  type cookedMeals ={
  }
  
  const cookedMeals: cookedMeals[] = [
  ]
  type requestedMeals ={
  }
  
  const requestedMeals: requestedMeals[] = [
  ]
  
  const checkTextInput = (e : any) => {
    e.preventDefault();
    if (password.value == rpassword.value) {
      UserService.editUser({fnameVal, lnameVal, emailVal, passwordVal, dobVal, streetVal, cityVal, countryVal, postalCodeVal, phoneVal, reviewObj, cookedMeals, requestedMeals}, user[0].id);
    }
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        {
            desktop ? null :  <DesktopNavigation/>
        }
        
          <GoBackButton
              onPress={() => goBack()} 
          />
        <View style={[!desktop ? styles.custom_input_desktop_wrapper : styles.custom_input_mobile_wrapper, {marginTop: 33}]}>
          <CustomHeader  value="Edit Profile" />

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
          setValue={(text : string) => setStreet({ value: text, error: ''})}
          placeholder="Street" 
          error={!!fname.error}
          errorText="You have to fill street"
          value={street.value}/>


          <CustomInput 
          setValue={(text : string) => setCity({ value: text, error: ''})}
          placeholder="City" 
          error={!!fname.error}
          errorText="You have to fill city"
          value={city.value}/>

          
          <CustomInput 
          setValue={(text : string) => setCountry({ value: text, error: ''})}
          placeholder="Country" 
          value={country.value}/>

          <CustomInput 
          setValue={(text : string) => setPhone({ value: text, error: ''})}
          placeholder="Phone" 
          value={phone.value}/>

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
          text="Save" 
          onPress={checkTextInput} 
          navigation={() => navigation.navigate('LoginScreen')} 
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
    maxWidth: 1400,
    margin: 'auto'
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
