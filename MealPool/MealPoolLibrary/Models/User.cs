using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MealPoolLibrary.Models
{
    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Points { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PostalCode { get; set; }
        public string Phone { get; set; }
        public List<Review>? Reviews { get; set; } = new List<Review>();
        public List<string>? RequestedMeals { get; set; } = new List<string>();
        public List<string>? CookedMeals { get; set; } = new List<string>();


    }
}
