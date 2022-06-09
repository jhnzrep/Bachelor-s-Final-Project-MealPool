using MealPoolLibrary.Models;
using MealPoolLibrary.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using MealPoolLibrary.Utility;
using System.IdentityModel.Tokens.Jwt;
using System.Text.Json;

namespace MealPoolRestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;

        public UserController(IUserRepository userRepository, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _configuration = configuration;
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            var users = _userRepository.GetAllUsers();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public ActionResult<IEnumerable<User>> GetById(string id)
        {
            var users = _userRepository.GetUserById(id);
            return Ok(users);
        }

        [HttpPost]
        public ActionResult<IEnumerable<User>> PostCustomer(User user)
        {
            var newUser = _userRepository.AddUser(user);
            return Ok(newUser);
        }

        [HttpPost]
        [Route("/Register")]
        public ActionResult<IEnumerable<User>> Register(User user)
        {
            var newUser = _userRepository.RegisterUser(user);
            return Ok(newUser);
        }

        [HttpPost]
        [Route("/Login")]
        public ActionResult Login([FromBody] LoginCredentials credentials)
        {
            User user = _userRepository.LoginUser(credentials.Email, credentials.Password);

            return Ok(JsonSerializer.Serialize(new JwtSecurityTokenHandler().WriteToken(JWTWriter.Write(user, _configuration))));
        }

        [HttpPut("{id}")]
        public ActionResult<User> Put(string id, [FromBody] User user)
        {
            return Ok(_userRepository.UpdateUser(id, user));
        }

        [HttpGet]
        [Route("Search")]
        public ActionResult<IEnumerable<User>> Search([FromQuery] string name)
        {
            return Ok(_userRepository.SearchUsers(name));
        }

    }
}
