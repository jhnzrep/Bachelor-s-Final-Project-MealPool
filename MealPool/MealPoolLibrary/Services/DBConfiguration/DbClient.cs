using MealPoolLibrary.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace MealPoolLibrary.Services.DBConfiguration
{
    public class DbClient : IDbClient
    {
        private readonly IMongoCollection<User> _users;
        private readonly IMongoCollection<Meal> _meals;

        public DbClient(IOptions<MealPoolDBConfig> mealPoolDbConfig)
        {
            var client = new MongoClient("mongodb+srv://Admin:ZShiNNe6vjEF7ZXj@mealpooldb.amlax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            var database = client.GetDatabase("MealPoolDB");

            _users = database.GetCollection<User>("Users");
            _meals = database.GetCollection<Meal>("Meals");

        }

        public IMongoCollection<User> GetUsersCollection()
        {
            return _users;
        }

        public IMongoCollection<Meal> GetMealsCollection()
        {
            return _meals;
        }
    }
}
