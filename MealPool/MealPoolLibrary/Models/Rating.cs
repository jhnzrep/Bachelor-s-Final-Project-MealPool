using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MealPoolLibrary.Models
{
    class Rating
    {
        public int Id { get; set; }
        public int AuthorId { get; set; }
        public int RatedId { get; set; }
        public int Stars { get; set; }
        public string Comment { get; set; } 
    }
}
