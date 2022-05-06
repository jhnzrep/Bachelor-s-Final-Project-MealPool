import axios from 'axios';
import { useGlobalContext } from '../GlobalContext';
const API_URL = "http://localhost:5109/api";

type Review = {
    authorId: string,
    ratedId: string,
    stars: number,
    comment: string
}

const postReview = ({authorId, ratedId, stars, comment} : Review) => {
    axios
    .post(API_URL + '/Review', {
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

const ReviewService = {
    postReview
}
export default ReviewService;

