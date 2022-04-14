using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MealPoolLibrary.Models
{
    public class Review
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId Id { get; set; }
        public int AuthorId { get; set; }
        public int RatedId { get; set; }
        public int Stars { get; set; }
        public string Comment { get; set; } 
    }
}
