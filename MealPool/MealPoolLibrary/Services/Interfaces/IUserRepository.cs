using MealPoolLibrary.Models;
using Nest;

namespace MealPoolLibrary.Services.Interfaces
{
    public interface IUserRepository
    {
        List<User> GetAllUsers();
        User GetUserById(string id);
        User AddUser(User user);
        User RegisterUser(User user);
        User LoginUser(string email, string password);
        User UpdateUser(string id, User user);
        List<User> SearchUsers(string name);
    }
}
