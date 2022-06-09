using MealPoolLibrary.Models;

namespace MealPoolLibrary.Services.Interfaces
{
    public interface IMealRepository
    {
        List<Meal> GetAllMeals();
        List<Meal> GetAllMeals(string userid);
        Meal GetMealById(string id);
        List<Meal> SearchMeals(string name);
        List<Meal> SearchMeals(string name, string category);
        List<Meal> GetMealsByCategory(string category);
        Meal AddMeal(Meal meal);

        List<Meal> GetRequestedMeals(string userid);
        List<Meal> GetCookedMeals(string userid);

        string RequestMeal(Request request);
        string AcceptRequest(Request request);
        string DeclineRequest(Request request);
    }
}
