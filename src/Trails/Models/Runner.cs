using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Trails.Models
{
    public class Runner
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string FavoriteBeverage { get; set; }

        public Runner()
        {
        }
    }
}
