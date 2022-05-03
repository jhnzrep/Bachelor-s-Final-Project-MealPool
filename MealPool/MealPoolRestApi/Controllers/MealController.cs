using MealPoolLibrary.Models;
using MealPoolLibrary.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace MealPoolRestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MealController : ControllerBase
    {
        private readonly IMealRepository _mealRepository;

        public MealController(IMealRepository mealRepository)
        {
            _mealRepository = mealRepository;
        }

        //GET: api/<MealController>
        [HttpGet]
        public ActionResult<IEnumerable<Meal>> Get()
        {
            return _mealRepository.GetAllMeals();
        }

        [HttpGet("{name},{category}")]
        public ActionResult<IEnumerable<Meal>> Get(string name, string category)
        {
            return _mealRepository.SearchMeals(name, category);
        }

        [HttpGet("{name}")]
        public ActionResult<IEnumerable<Meal>> Get(string name)
        {
            return _mealRepository.SearchMeals(name);
        }

        [HttpGet("{category}")]
        public ActionResult<IEnumerable<Meal>> GetByCategory(string category)
        {
            return _mealRepository.GetMealsByCategory(category);
        }

        //POST api/<MealController>
        [HttpPost]
        public void Post([FromBody] Meal meal)
        {
            Ok(_mealRepository.AddMeal(meal));
        }

        // PUT api/<MealController>/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] Meal meal)
        {
        }

        // DELETE api/<MealController>/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
        }
    }
}
