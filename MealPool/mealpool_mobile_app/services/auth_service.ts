import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { EmptyObject } from 'react-hook-form';
import { Review } from '../types/Review';
import { LoginUser, RegisterUser } from '../types/User';
import { API_URL } from './API_URL';
import Async_Storage from './asyncStorage';


const loginUser = ({textInputEmail, textInputPassword} : LoginUser ) => {
    return axios
    .post(API_URL + 'login', {
      email: textInputEmail.value ,
      password: textInputPassword.value
    })
    .then(function (response) {
      Async_Storage.storeData(response.data)
      return "success";
    })
    .catch(function (error) {
      console.log(error.response);
      return "error";
    });
}

const array_emp: Review[] = [
]

const registerUser = ({fnameVal, lnameVal, emailVal, passwordVal, dobVal, streetVal, cityVal, countryVal, postalCodeVal,phoneVal, reviewObj, requestedMeals, cookedMeals } : RegisterUser ) => {
  console.log(fnameVal, lnameVal, emailVal, passwordVal, dobVal, streetVal, cityVal, countryVal, postalCodeVal,phoneVal, reviewObj )
  return axios
  .post(API_URL + 'Register', {
    firstName: fnameVal, 
    lastName: lnameVal,
    email: emailVal,
    password: passwordVal,
    createdDate: new Date(),
    dateOfBirth: new Date(2018, 0O5, 0O5, 17, 23, 42, 11),
    street: streetVal,
    city: cityVal,
    country: countryVal,
    postalCode: postalCodeVal,
    phone: phoneVal,
    reviews: array_emp,
    requestedMeals: [],
    cookedMeals: [],
  })
  .then(function (response) {
    console.log(response.data);
    //localStorage.setItem("user", JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error.response);
  });
}
const AuthService = {
  loginUser,
  registerUser
}
export default AuthService;