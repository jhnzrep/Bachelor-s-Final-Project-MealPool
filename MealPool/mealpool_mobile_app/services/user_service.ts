import axios from 'axios';
import { useGlobalContext } from '../GlobalContext';
const API_URL = "http://localhost:5109/api";

  const getUsers = () => {
    axios
    .get(API_URL + '/User')
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

const MealService = {
    getUsers
}
export default MealService;

