import axios from 'axios';
import { EmptyObject } from 'react-hook-form';
import { LoginUser, RegisterUser } from '../types/User';
const API_URL = "http://localhost:5109/";

type reviewObj ={
  authorId: string,
  ratedId: string,
  stars: Number,
  comment: String
}


const loginUser = ({textInputEmail, textInputPassword} : LoginUser ) => {
    return axios
    .post(API_URL + 'login', {
      email: textInputEmail.value ,
      password: textInputPassword.value
    })
    .then(function (response) {
      console.log(response.data);
      localStorage.setItem("jwt", JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error.response);
    });
}

const array_emp: reviewObj[] = [
  { authorId: "dsad", ratedId: "sadasd", stars: 0,  comment: "dsada"}
]

const registerUser = ({fnameVal, lnameVal, emailVal, passwordVal, dobVal, streetVal, cityVal, countryVal, postalCodeVal,phoneVal, reviewObj } : RegisterUser ) => {
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
    reviews: array_emp
  })
  .then(function (response) {
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
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