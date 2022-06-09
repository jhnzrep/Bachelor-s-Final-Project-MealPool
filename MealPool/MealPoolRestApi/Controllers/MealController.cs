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
        public ActionResult<IEnumerable<Meal>> Get(string? userid)
        {
            return _mealRepository.GetAllMeals();
        }

        [HttpGet]
        [Route("Search")]
        public ActionResult<IEnumerable<Meal>> GetByNameAndCategory([FromQuery] string? name, [FromQuery] string? category)
        {
            switch (String.IsNullOrEmpty(name))
            {
                case true when !String.IsNullOrEmpty(category) :
                    return _mealRepository.GetMealsByCategory(category);
                case false when String.IsNullOrEmpty(category) :
                    return _mealRepository.SearchMeals(name);
                default:
                    return _mealRepository.SearchMeals(name,category);
            }
        }

        [HttpPost]
        [Route("Request")]
        public ActionResult<string> RequestMeal(Request request)
        {
            return Ok(_mealRepository.RequestMeal(request));
        }

        [HttpPost]
        [Route("acceptRequest")]
        public ActionResult<string> AcceptRequest(Request request)
        {
            return Ok(_mealRepository.AcceptRequest(request));
        }

        [HttpPost]
        [Route("declineRequest")]
        public ActionResult<string> DeclineRequest(Request request)
        {
            return Ok(_mealRepository.DeclineRequest(request));
        }

        //POST api/<MealController>
        [HttpPost]
        public void Post([FromBody] Meal meal)
        {
            Ok(_mealRepository.AddMeal(meal));
        }

        [HttpGet]
        [Route("getrequestedmeals")]
        public ActionResult<IEnumerable<Meal>> GetRequestedMeals(string userid)
        {
            return _mealRepository.GetRequestedMeals(userid);
        }

        [HttpGet]
        [Route("getcookedmeals")]
        public ActionResult<IEnumerable<Meal>> GetCookedMeals(string userid)
        {
            return _mealRepository.GetCookedMeals(userid);
        }

        //// PUT api/<MealController>/5
        //[HttpPut("{id}")]
        //public void Put(string id, [FromBody] Meal meal)
        //{
        //}

        //// DELETE api/<MealController>/5
        //[HttpDelete("{id}")]
        //public void Delete(string id)
        //{
        //}
    }
}
