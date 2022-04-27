using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MealPoolLibrary.Models
{
    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string _id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PostalCode { get; set; }
        public string Phone { get; set; }
    }
}
