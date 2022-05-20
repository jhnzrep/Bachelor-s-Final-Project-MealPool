import axios from 'axios';
import { useGlobalContext } from '../GlobalContext';
import { Review } from '../types/Review';
import { API_URL } from './API_URL';


const postReview = ({authorId, ratedId, stars, comment} : Review) => {
    return axios
    .post(API_URL + 'api/Review', {
        authorId: authorId, 
        ratedId: ratedId,
        stars: stars,
        comment: comment
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

const getReviews = (authorId : String) => {
    return axios
    .get(API_URL + `api/Review?id=${authorId}`)    
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



const ReviewService = {
    postReview,
    getReviews
}
export default ReviewService;

