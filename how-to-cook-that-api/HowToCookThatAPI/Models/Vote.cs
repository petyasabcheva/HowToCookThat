using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HowToCookThatAPI.Models
{
    public class Vote
    {
        public int Id { get; set; }

        public int RecipeId { get; set; }

        public virtual Recipe Recipe { get; set; }

        public string UserId { get; set; }

        public virtual User User { get; set; }

        public byte Value { get; set; }
    }
}
