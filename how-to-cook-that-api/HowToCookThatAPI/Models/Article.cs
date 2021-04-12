using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HowToCookThatAPI.Models
{
    public class Article
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }

        public string ImageUrl { get; set; }

        public string Content { get; set; }

        public string UserEmail { get; set; }

    }
}
