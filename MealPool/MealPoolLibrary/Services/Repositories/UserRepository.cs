using MealPoolLibrary.Models;
using MealPoolLibrary.Services.DBConfiguration;
using MealPoolLibrary.Services.Interfaces;
using MongoDB.Driver;
using Nest;
using System.IdentityModel.Tokens.Jwt;

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

        public User RegisterUser(User user)
        {
            if(_users.Find(i => i.Email == user.Email).Any())
            {
                throw new Exception("Email: " + user.Email + "is already taken.");
            }

            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

            _users.InsertOne(user);
            return user;
        }

        public List<User> GetAllUsers()
        {
            return _users.Find(i => true).ToList();
        }

        public User GetUserById(string id)
        {
            return (User)_users.Find(i => i._id == id).FirstOrDefault();
        }

        public User LoginUser(string email, string password)
        {
            var user = (User)_users.Find(i => i.Email == email).FirstOrDefault();

            if (user == null || !BCrypt.Net.BCrypt.Verify(password, user.Password))
                throw new Exception("Username or password is incorrect");

            return user;
        }
    }
}
