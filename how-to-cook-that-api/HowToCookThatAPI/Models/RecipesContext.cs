using Microsoft.EntityFrameworkCore;


namespace HowToCookThatAPI.Models
{
    public class RecipesContext: DbContext
    {
        public RecipesContext(DbContextOptions<RecipesContext> options)
            : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Vote> Votes { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Recipe>()
                .HasOne<Category>(r => r.Category)
                .WithMany(c => c.Recipes);

            builder.Entity<Category>().HasData(
               new Category() { Id = 1, Name = "soups" },
               new Category() { Id = 2, Name = "salads" },
               new Category() { Id = 3, Name = "mains" },
               new Category() { Id = 4, Name = "deserts" }
           );
        }
    }
}

