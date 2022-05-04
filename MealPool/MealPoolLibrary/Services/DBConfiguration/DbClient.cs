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
            var client = new MongoClient(mealPoolDbConfig.Value.Connection_String);
            var database = client.GetDatabase(mealPoolDbConfig.Value.Database_Name);

            _users = database.GetCollection<User>(mealPoolDbConfig.Value.UsersCollection);
            _meals = database.GetCollection<Meal>(mealPoolDbConfig.Value.MealsCollection);

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
