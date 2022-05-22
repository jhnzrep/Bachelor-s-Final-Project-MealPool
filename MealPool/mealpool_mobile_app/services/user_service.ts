import axios from 'axios';
import { useGlobalContext } from '../GlobalContext';
import { Review } from '../types/Review';
import { RegisterUser, UserSearch } from '../types/User';
import { API_URL } from './API_URL';

  const getUsers = () => {
    return axios
    .get(API_URL + 'api/User')
    .then(function (response) {
        response = response.data
        console.log(response)
        return response
    })
    .catch(function (error) {
      console.log(error.response);
      return error.response
    });
  }

  const getUserById = (id) => {
    return axios
    .get(API_URL + 'api/User/' + id)
    .then(function (response) {
        response = response.data
        console.log(response)
        return response
    })
    .catch(function (error) {
      console.log(error.response);
      return error.response
    });
  }

  const searchUser = ({searchVal} : UserSearch) => {
    return axios
    .get(API_URL + `api/User/Search?name=${searchVal}`)
    .then(function (response) {
      response = response.data
      console.log(response)
      return response
    })
    .catch(function (error) {
      console.log(error.response);
      return error.response
    });
  }

  const array_emp: Review[] = [
    { authorId: "dsad", ratedId: "sadasd", stars: 0,  comment: "dsada"}
  ]


  const editUser = ({fnameVal, lnameVal, emailVal, passwordVal, dobVal, streetVal, cityVal, countryVal, postalCodeVal,phoneVal, reviewObj } : RegisterUser, userId) => {
    console.log(fnameVal, lnameVal, emailVal, passwordVal, dobVal, streetVal, cityVal, countryVal, postalCodeVal,phoneVal, reviewObj )
    return axios
    .put(API_URL + '/api/User/' + userId, {
      firstName: fnameVal, 
      lastName: lnameVal,
      email: emailVal,
      id: userId,
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
      //localStorage.setItem("user", JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error.response);
    });
  }

const UserService = {
    getUsers,
    getUserById,
    searchUser,
    editUser
}
export default UserService;

