using HowToCookThatAPI.Models.InputModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HowToCookThatAPI.Models
{
    public class Recipe
    {
        public Recipe()
        {
            //this.Ingredients = new HashSet<Ingredient>();
            this.Likes = new HashSet<Like>();
        }
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

        public string Instructions { get; set; }

        public int PreparationTime { get; set; }

        public int CookingTime { get; set; }

        public int PortionsCount { get; set; }

        public DateTime DateCreated { get; set; }

        public string ImageUrl { get; set; }

        public string UserEmail { get; set; }

        public int CategoryId { get; set; }

        public virtual Category Category { get; set; }

        //public virtual ICollection<Ingredient> Ingredients { get; set; }

        public virtual ICollection<Like> Likes { get; set; }

    }
}
