using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MealPoolLibrary.Models
{
    public class Meal
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _id{ get; set; }
        public string CookId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int MaxPeople { get; set; }
        public List<MealRequest>? Requests { get; set; } = new List<MealRequest>();
        DateTime Created { get; set; }
        public DateTime DateTime { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PostalCode { get; set; }

    }
}
