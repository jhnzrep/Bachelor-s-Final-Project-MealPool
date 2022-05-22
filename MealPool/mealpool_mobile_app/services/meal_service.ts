import axios from 'axios';
import { useGlobalContext } from '../GlobalContext';
import { API_URL } from './API_URL';
const moment = require('moment');


const getMeals = () => {
    return axios
    .get(API_URL + `api/meal`)
    .then(function (response) {
      //localStorage.setItem("user", JSON.stringify(response.data));
      response = response.data
      console.log(response)
      return response
    })
    .catch(function (error) {
      console.log(error.response);
      return error.response
    });
}

const getMealsByCategory = (category : String) => {
  return axios
  .get(API_URL + `api/meal/Search?category=${category}`)
  .then(function (response) {
    //localStorage.setItem("user", JSON.stringify(response.data));
    response = response.data
    console.log(response)
    console.log(API_URL + `api/meal?category=${category}`)
    return response
  })
  .catch(function (error) {
    console.log(error.response);
    return error.response
  });
}

let now = moment().format('LLLL');


const addMeal = ({cookId, nameVal, dateItemVal, categoryVal, descriptionVal, streetVal, cityVal, countryVal, postalCodeVal} : Meal) => {
  console.log(new Date().toLocaleString())
  return axios
  .post(API_URL + 'api/Meal', {
    cookId: cookId,
    name: nameVal,
    dateItem: new Date(),
    category: categoryVal,
    description: descriptionVal,
    street: streetVal, 
    city: cityVal, 
    country: countryVal,
    postalCode: postalCodeVal
  })
  .then(function (response) {
    console.log(response.data)
    return response
  })
  .catch(function (error) {
    console.log(error.response);
    return error.response
  });
}

const searchMeal = ({searchVal} : MealSearch) => {
  return axios
  .get(API_URL + `api/Meal/Search?name=${searchVal}`)
  .then(function (response) {
    response = response.data
    console.log(API_URL + `api/Meal/Search?name=${searchVal}`)
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
    addMeal,
    searchMeal,
    getMealsByCategory
}
export default MealService;