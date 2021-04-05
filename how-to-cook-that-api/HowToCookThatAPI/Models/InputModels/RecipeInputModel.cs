using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HowToCookThatAPI.Models.InputModels
{
    public class RecipeInputModel
    {
        public string Name { get; set; }

        public string Instructions { get; set; }

        public int PrepTime { get; set; }

        public int CookTime { get; set; }

        public int Portions { get; set; }

        public string ImageUrl { get; set; }

        public string Category { get; set; }

    }
}
