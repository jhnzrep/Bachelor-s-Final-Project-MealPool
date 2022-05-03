using MealPoolLibrary.Models;
using MealPoolLibrary.Services.DBConfiguration;
using MealPoolLibrary.Services.Interfaces;
using MongoDB.Driver;

namespace MealPoolLibrary.Services.Repositories
{
    public class MealRepository : IMealRepository
    {
        private readonly IMongoCollection<Meal> _meals;
        public MealRepository(IDbClient dbClient)
        {
            _meals = dbClient.GetMealsCollection();
        }
        public Meal AddMeal(Meal meal)
        {
            _meals.InsertOne(meal);
            return meal;
        }

        public List<Meal> GetAllMeals()
        {
            return _meals.Find(i => true).ToList();
        }

        public Meal GetMealById(string id)
        {
            return (Meal)_meals.Find(i => i._id == id);
        }

        public List<Meal> SearchMeals(string name)
        {
            return GetAllMeals().FindAll(i => i.Name.Contains(name, StringComparison.OrdinalIgnoreCase));
        }

        public List<Meal> SearchMeals(string name, string category)
        {
            return _meals.Find(i => i.Category == category).ToList().Where(i => i.Name.Contains(name, StringComparison.OrdinalIgnoreCase)).ToList();
        }

        public List<Meal> GetMealsByCategory(string category)
        {
            return _meals.Find(i => i.Category == category).ToList();
        }
    }
}
