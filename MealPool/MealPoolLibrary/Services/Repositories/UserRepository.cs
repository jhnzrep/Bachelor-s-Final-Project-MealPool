using MealPoolLibrary.Models;
using MealPoolLibrary.Services.DBConfiguration;
using MealPoolLibrary.Services.Interfaces;
using MongoDB.Driver;

namespace MealPoolLibrary.Services.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IMongoCollection<User> _users;
        public UserRepository(IDbClient dbClient)
        {
            _users = dbClient.GetUsersCollection();
        }

        public User AddUser(User user)
        {
            _users.InsertOne(user);
            return user;
        }

        public List<User> GetAllUsers()
        {
            return _users.Find(i => true).ToList();
        }

        public User GetUserById(string id)
        {
            return (User)_users.Find(i => i.Id == id);
        }
    }
}
