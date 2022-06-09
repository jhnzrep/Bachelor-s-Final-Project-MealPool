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
            return (User)_users.Find(i => i.Id== id).FirstOrDefault();
        }

        public User LoginUser(string email, string password)
        {
            var user = (User)_users.Find(i => i.Email == email).FirstOrDefault();

            if (user == null || !BCrypt.Net.BCrypt.Verify(password, user.Password))
                throw new Exception("Username or password is incorrect");

            return user;
        }

        public User UpdateUser(string id, User user)
        {
            User temp = GetUserById(id);
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            user.Id = id;
            user.Reviews = temp.Reviews.ToList();
            user.RequestedMeals = temp.RequestedMeals.ToList();
            user.CookedMeals = temp.CookedMeals.ToList();
            _users.ReplaceOne(i => i.Id == id, user);
            return user;
        }

        public List<User> SearchUsers(string name)
        {
            List<User> users = GetAllUsers();
            List<User> filteredusers = new List<User>();

            foreach (User user in users)
            {
                string username = user.FirstName + " " + user.LastName;
                if(username.Contains(name, StringComparison.OrdinalIgnoreCase))
                    filteredusers.Add(user);
            }
            return filteredusers;
        }
    }
}
