using MealPoolLibrary.Models;

namespace MealPoolLibrary.Services.Interfaces
{
    public interface IReviewRepository
    {
        List<Review> GetAllReviews();
        Review GetReviewById(string id);
        Review AddReview(Review review);
    }
}
