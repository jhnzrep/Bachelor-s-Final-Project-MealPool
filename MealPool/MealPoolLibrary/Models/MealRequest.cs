using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MealPoolLibrary.Models
{
    public class MealRequest
    {
        public string Userid { get; set; }
        public string Status { get; set; } 
        public int Points { get; set; }
    }
}
