using MealPoolLibrary.Models;
using MealPoolLibrary.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

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
        [Route("/login")]
        public ActionResult Login(string email, string password)
        {
            User user = _userRepository.LoginUser(email, password);

            var claims = new[] {
                        new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("UserId", user._id),
                        new Claim("Email", user.Email)
                    };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.UtcNow.AddMinutes(20),
                signingCredentials: signIn);

            return Ok(new JwtSecurityTokenHandler().WriteToken(token));
        }
    }
}
