using MealPoolLibrary.Models;

namespace MealPoolLibrary.Services.Interfaces
{
    public interface IMealRepository
    {
        List<Meal> GetAllMeals();
        Meal GetMealById(string id);
        List<Meal> SearchMeals(string name);
        List<Meal> SearchMeals(string name, string category);
        List<Meal> GetMealsByCategory(string category);
        Meal AddMeal(Meal meal);
    }
}
