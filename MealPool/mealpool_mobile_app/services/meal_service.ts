import axios from 'axios';
import { useGlobalContext } from '../GlobalContext';
const API_URL = "http://localhost:5109/";


const getMeals = () => {
    return axios
    .get(API_URL + 'api/meal')
    .then(function (response) {
      localStorage.setItem("user", JSON.stringify(response.data));
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
    getMeals
}
export default MealService;