using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HowToCookThatAPI.Models
{
    public class Category
    {
        public Category()
        {
            this.Recipes = new HashSet<Recipe>();
        }
        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<Recipe> Recipes { get; set; }
    }
}
