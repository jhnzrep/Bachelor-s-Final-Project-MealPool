using MealPoolLibrary.Models;
using MealPoolLibrary.Services.DBConfiguration;
using MealPoolLibrary.Services.Interfaces;
using MongoDB.Bson;
using MongoDB.Driver;

namespace MealPoolLibrary.Services.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly IMongoCollection<User> _users;
        public ReviewRepository(IDbClient dbClient)
        {
            _users = dbClient.GetUsersCollection();
        }
        public Review AddReview(Review review)
        {
            var update = Builders<User>.Update.Push("Reviews", review);
            var filter = Builders<User>.Filter.Eq("_id", ObjectId.Parse(review.RatedId));
            _users.UpdateOne(filter, update);
            return review;
        }

        public List<Review> GetAllReviews(string id)
        {
            return _users.Find(i => i.Id == id).FirstOrDefault().Reviews.ToList();
        }

        public Review GetReviewById(string id)
        {
            return (Review)_users.Find(i => i.Id.ToString() == id);
        }
    }
}
