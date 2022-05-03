using MealPoolLibrary.Models;
using MealPoolRestApi.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Web.Http;

namespace WebAPITests
{
    [TestClass]
    public class UserTests
    {
        [TestMethod]
        public void Register()
        {
            //Arrange
            User user = new User()
            {
                FirstName = "UnitTesting",
                LastName = "UnitTesting",
                Email = "UnitTesting@UnitTesting.com",
                Password = "UnitTesting",
                CreatedDate = System.DateTime.Now,
                DateOfBirth = System.DateTime.Now,
                Street = "UnitTesting",
                City = "UnitTesting",
                Country = "UnitTesting",
                PostalCode = "UnitTesting",
                Phone = "UnitTesting"
            };

            _config = new HttpConfiguration()

            UserController = new UserController(repository, new HttpConfiguration());


        }
    }
}