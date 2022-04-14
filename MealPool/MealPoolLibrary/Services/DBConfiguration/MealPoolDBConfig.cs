using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MealPoolLibrary.Services.DBConfiguration
{
    public class MealPoolDBConfig
    {
        public string Database_Name { get; set; }
        public string Connection_String { get; set; }
        public string UsersCollection { get; set; }
        public string MealsCollection { get; set; }
        public string ReviewsCollection { get; set; }

    }
}
