using MealPoolLibrary.Models;
using MealPoolLibrary.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MealPoolRestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewRepository _reviewRepository;

        public ReviewController(IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Review>> Get(string id)
        {
            var reviews = _reviewRepository.GetAllReviews(id);
            return Ok(reviews);
        }

        [HttpPost]
        public ActionResult<IEnumerable<Review>> PostReview(Review review)
        {
            var newReview = _reviewRepository.AddReview(review);
            return Ok(newReview);
        }


    }
}
