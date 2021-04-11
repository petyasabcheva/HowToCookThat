using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HowToCookThatAPI.Models
{
    public class Like
    {
        [Key]
        public int Id { get; set; }
        public string UserEmail { get; set; }
        public Recipe Recipe { get; set; }

    }
}
