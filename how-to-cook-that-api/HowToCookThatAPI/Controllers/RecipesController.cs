using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HowToCookThatAPI.Models;
using HowToCookThatAPI.Models.InputModels;
using Microsoft.AspNetCore.Cors;

namespace HowToCookThatAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly RecipesContext _context;

        public RecipesController(RecipesContext context)
        {
            _context = context;
        }

        // GET: api/Recipes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipes()
        {
            return await _context.Recipes.Select(r => new Recipe()
            {
                Id = r.Id,
                Name = r.Name,
                Instructions = r.Instructions,
                Likes = r.Likes,
                PreparationTime = r.PreparationTime,
                CookingTime = r.CookingTime,
                PortionsCount = r.PortionsCount,
                ImageUrl = r.ImageUrl,
                CategoryId = r.CategoryId,
                Category=r.Category
            }).ToListAsync();
        }

        [HttpGet("/api/Recipes/GetMostLikedRecipes")]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetMostLikedRecipes()
        {
            return await _context.Recipes.OrderByDescending(r => r.Likes.Count).Take(6).Select(r => new Recipe()
            {
                Id = r.Id,
                Name = r.Name,
                Instructions = r.Instructions,
                Likes = r.Likes,
                PreparationTime = r.PreparationTime,
                CookingTime = r.CookingTime,
                PortionsCount = r.PortionsCount,
                ImageUrl = r.ImageUrl,
                Category=r.Category,
                CategoryId = r.CategoryId,
            }).ToListAsync();
        }

        [HttpGet("/api/Recipes/GetNewestRecipes")]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetNewestRecipes()
        {
            return await _context.Recipes.OrderByDescending(r => r.DateCreated).Take(3).Select(r => new Recipe()
            {
                Id = r.Id,
                Name = r.Name,
                Instructions = r.Instructions,
                Likes = r.Likes,
                PreparationTime = r.PreparationTime,
                CookingTime = r.CookingTime,
                PortionsCount = r.PortionsCount,
                ImageUrl = r.ImageUrl,
                CategoryId = r.CategoryId,
                Category = r.Category
            }).ToListAsync();
        }

        // GET: api/Recipes/categoryName
        [HttpGet("/api/{categoryName}")]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipeByCategory(string categoryName)
        {
            return await _context.Recipes.Where(x=>x.Category.Name==categoryName).Select(r => new Recipe()
            {
                Id = r.Id,
                Name = r.Name,
                Instructions = r.Instructions,
                Likes = r.Likes,
                PreparationTime = r.PreparationTime,
                CookingTime = r.CookingTime,
                PortionsCount = r.PortionsCount,
                ImageUrl = r.ImageUrl,
                CategoryId = r.CategoryId,
                Category = r.Category
            }).ToListAsync();
        }

        [HttpGet("/api/Recipes/ByUser/{userEmail}")]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipeByUser(string userEmail)
        {
            return await _context.Recipes.Where(x => x.UserEmail == userEmail).ToListAsync();
        }

        // GET: api/Recipes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Recipe>> GetRecipe(int id)
        {
            var recipe = await _context.Recipes.FindAsync(id);

            if (recipe == null)
            {
                return NotFound();
            }

            return recipe;
        }

        // PUT: api/Recipes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipe(int id, Recipe recipe)
        {
            if (id != recipe.Id)
            {
                return BadRequest();
            }

            _context.Entry(recipe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecipeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Recipes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Recipe>> PostRecipe(RecipeInputModel input)
        {
            var recipe = new Recipe()
            {
                Name = input.Name,
                CategoryId = _context.Categories.Where(x => x.Name == input.Category).FirstOrDefault().Id,
                ImageUrl = input.ImageUrl,
                PreparationTime = input.PrepTime,
                CookingTime = input.CookTime,
                PortionsCount = input.Portions,
                Instructions = input.Instructions,
                UserEmail = input.UserEmail,
                DateCreated = DateTime.Now
            };
            _context.Recipes.Add(recipe);
            await _context.SaveChangesAsync();

            
            return NoContent();
            //return CreatedAtAction("GetRecipe", new { id = recipe.Id }, recipe);
        }

        // DELETE: api/Recipes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipe(int id)
        {
            var recipe = await _context.Recipes.FindAsync(id);
            if (recipe == null)
            {
                return NotFound();
            }

            _context.Recipes.Remove(recipe);
            await _context.SaveChangesAsync();

            return NoContent();
        }



        [HttpGet("/api/check/{id}/{email}")]
        public bool CheckIfLiked(int id,string email)
        {
            return _context.Recipes.Select(r => new Recipe()
            {
                Id = r.Id,
                Name = r.Name,
                Instructions = r.Instructions,
                Likes = r.Likes,
                PreparationTime = r.PreparationTime,
                CookingTime = r.CookingTime,
                PortionsCount = r.PortionsCount,
                ImageUrl = r.ImageUrl,
                CategoryId = r.CategoryId
            }).Any(e => e.Id == id&&e.Likes.Any(x=>x.UserEmail==email));
        }

        [HttpPost("/api/like/{id}/{email}")]
        public async Task<IActionResult> Like(int id, string email)
        {
            var recipe = _context.Recipes.FirstOrDefault(r => r.Id == id);
            if (recipe == null)
            {
                return NotFound();
            }

            recipe.Likes.Add(new Like() {UserEmail=email});
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPost("/api/dislike/{id}/{email}")]
        public async Task<IActionResult> Dislike(int id, string email)
        {
            var recipe = _context.Recipes.Where(r => r.Id == id).FirstOrDefault();

            if (recipe == null)
            {
                return NotFound();
            }
            var like = _context.Recipes.FirstOrDefault(r => r.Id == id).Likes.FirstOrDefault(l => l.UserEmail == email);
            //if (like == null)
            //{
            //    return NotFound();
            ////}
            //recipe.Likes.Remove(like);
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool RecipeExists(int id)
        {
            return _context.Recipes.Any(e => e.Id == id);
        }
    }
}
