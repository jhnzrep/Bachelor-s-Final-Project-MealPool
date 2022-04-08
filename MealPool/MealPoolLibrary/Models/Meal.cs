using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MealPoolLibrary.Models
{
    class Meal
    {
        public int Id { get; set; }
        public int CookId { get; set; }
        public string Name { get; set; }
        DateTime Created { get; set; }
        DateTime DateTime { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PostalCode { get; set; }

    }
}
