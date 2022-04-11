using MealPoolLibrary.Models;
using MealPoolLibrary.Services.DBConfiguration;
using MealPoolLibrary.Services.Interfaces;
using MongoDB.Driver;

namespace MealPoolLibrary.Services.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly IMongoCollection<Review> _reviews;
        public ReviewRepository(IDbClient dbClient)
        {
            _reviews = dbClient.GetReviewsCollection();
        }
        public Review AddReview(Review review)
        {
            _reviews.InsertOne(review);
            return review;
        }

        public List<Review> GetAllReviews()
        {
            return _reviews.Find(i => true).ToList();
        }

        public Review GetReviewById(string id)
        {
            return (Review)_reviews.Find(i => i.Id.ToString() == id);
        }
    }
}
