using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HowToCookThatAPI.Models
{
    public class Recipe
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

        public string Instructions { get; set; }

        public int PreparationTime { get; set; }

        public int CookingTime { get; set; }

        public int PortionsCount { get; set; }

        public string ImageUrl { get; set; }

        public string UserEmail { get; set; }

        //public virtual User AddedByUser { get; set; }

        public int CategoryId { get; set; }

        public virtual Category Category { get; set; }

        //public virtual ICollection<Ingredient> Ingredients { get; set; }

        //public virtual ICollection<Image> Images { get; set; }
    }
}
