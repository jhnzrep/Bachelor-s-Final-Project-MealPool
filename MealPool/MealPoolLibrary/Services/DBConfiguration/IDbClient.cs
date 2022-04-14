using MealPoolLibrary.Models;
using MongoDB.Driver;

namespace MealPoolLibrary.Services.DBConfiguration
{
    public interface IDbClient
    {
        IMongoCollection<User> GetUsersCollection();
        IMongoCollection<Meal> GetMealsCollection();
        IMongoCollection<Review> GetReviewsCollection();
    }
}
