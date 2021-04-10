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
            return await _context.Recipes.ToListAsync();
        }

        // GET: api/Recipes/categoryName
        [HttpGet("/api/{categoryName}")]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipeByCategory(string categoryName)
        {
            return await _context.Recipes.Where(x=>x.Category.Name==categoryName).ToListAsync();
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
                UserEmail=input.UserEmail,
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

        private bool RecipeExists(int id)
        {
            return _context.Recipes.Any(e => e.Id == id);
        }
    }
}
