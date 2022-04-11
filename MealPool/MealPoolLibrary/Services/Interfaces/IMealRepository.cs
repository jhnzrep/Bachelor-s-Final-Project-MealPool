using MealPoolLibrary.Models;

namespace MealPoolLibrary.Services.Interfaces
{
    public interface IMealRepository
    {
        List<Meal> GetAllMeals();
        Meal GetMealById(string id);
        Meal AddMeal(Meal meal);
    }
}
