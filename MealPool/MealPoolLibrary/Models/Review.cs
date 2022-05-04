using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MealPoolLibrary.Models
{
    public class Review
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { set; get; }
        public string AuthorId { get; set; }
        public string RatedId { get; set; }
        public int Stars { get; set; }
        public string Comment { get; set; } 
    }
}
