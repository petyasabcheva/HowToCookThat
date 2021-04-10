using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HowToCookThatAPI.Models
{
    public class Ingredient
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Quantity { get; set; }

    }
}
