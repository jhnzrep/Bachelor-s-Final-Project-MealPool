using MealPoolLibrary.Models;
using MealPoolLibrary.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace MealPoolRestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            var users = _userRepository.GetAllUsers();
            return Ok(users);
        }

        [HttpPost]
        public ActionResult<IEnumerable<User>> PostCustomer(User user)
        {
            var newUser = _userRepository.AddUser(user);
            return Ok(newUser);
        }
    }
}
