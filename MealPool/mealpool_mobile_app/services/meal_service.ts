import axios from 'axios';
import { useGlobalContext } from '../GlobalContext';
const moment = require('moment');
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

type Meal = {
  cookId: string;
  nameVal: string;
  dateItemVal: Date;
  categoryVal: string;
  descriptionVal: string;
  streetVal: string;
  cityVal: string;
  countryVal: string;
  postalCodeVal: string;
};


let now = moment().format('LLLL');


const addMeal = ({cookId, nameVal, dateItemVal, categoryVal, descriptionVal, streetVal, cityVal, countryVal, postalCodeVal} : Meal) => {
  console.log(new Date().toLocaleString())
  return axios
  .post(API_URL + 'api/Meal', {
    cookId: cookId,
    name: nameVal,
    dateItem: now,
    category: categoryVal,
    description: descriptionVal,
    street: streetVal, 
    city: cityVal, 
    country: countryVal,
    postalCode: postalCodeVal
  })
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
    getMeals,
    addMeal
}
export default MealService;