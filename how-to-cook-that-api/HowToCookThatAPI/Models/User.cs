//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace HowToCookThatAPI.Models
//{
//    public class User
//    {
//        public User()
//        {
//            this.Id = Guid.NewGuid().ToString();
//            //this.Roles = new HashSet<IdentityUserRole<string>>();
//            this.Votes = new HashSet<Vote>();
//        }

//        public string Id { get; set; }

//        public string FirstName { get; set; }
//        public string Lastame { get; set; }
//        public string Email { get; set; }


//        //// Audit info
//        //public DateTime CreatedOn { get; set; }

//        //public DateTime? ModifiedOn { get; set; }

//        //// Deletable entity
//        //public bool IsDeleted { get; set; }

//        //public DateTime? DeletedOn { get; set; }

//        //public virtual ICollection<IdentityUserRole<string>> Roles { get; set; }


//        public virtual ICollection<Vote> Votes { get; set; }
//    }
//}
