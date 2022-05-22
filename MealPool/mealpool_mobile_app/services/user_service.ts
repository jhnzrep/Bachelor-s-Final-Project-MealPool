import axios from 'axios';
import { useGlobalContext } from '../GlobalContext';
import { UserSearch } from '../types/User';
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
      console.log(API_URL + `api/User/Search?name=${searchVal}`)
      console.log(response)
      return response
    })
    .catch(function (error) {
      console.log(error.response);
      return error.response
    });
  }

const UserService = {
    getUsers,
    getUserById,
    searchUser
}
export default UserService;

