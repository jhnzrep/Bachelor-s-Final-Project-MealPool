using MealPoolLibrary.Models;
using MealPoolLibrary.Services.DBConfiguration;
using MealPoolLibrary.Services.Interfaces;
using MongoDB.Bson;
using MongoDB.Driver;

namespace MealPoolLibrary.Services.Repositories
{
    public class MealRepository : IMealRepository
    {
        private readonly IMongoCollection<Meal> _meals;
        private readonly IMongoCollection<User> _users;
        public MealRepository(IDbClient dbClient)
        {
            _meals = dbClient.GetMealsCollection();
            _users = dbClient.GetUsersCollection();
        }
        public Meal AddMeal(Meal meal)
        {
            _meals.InsertOne(meal);
            var update = Builders<User>.Update.Push("CookedMeals", meal._id.ToString());
            var filter = Builders<User>.Filter.Eq("_id", ObjectId.Parse(meal.CookId));
            _users.UpdateOne(filter, update);
            return meal;
        }

        public List<Meal> GetAllMeals(string userid)
        {
            return _meals.Find(i => i.DateTime > DateTime.Now).ToList().Where(i => i.CookId != userid).ToList();
        }

        public List<Meal> GetAllMeals()
        {
            return _meals.Find(i => i.DateTime > DateTime.Now).ToList();
        }

        public Meal GetMealById(string id)
        {
            return (Meal)_meals.Find(i => i._id == id).FirstOrDefault();
        }

        public List<Meal> SearchMeals(string name)
        {
            return GetAllMeals().FindAll(i => i.Name.Contains(name, StringComparison.OrdinalIgnoreCase));
        }

        public List<Meal> SearchMeals(string name, string category)
        {
            return GetAllMeals().FindAll(i => i.Category == category).Where(i => i.Name.Contains(name, StringComparison.OrdinalIgnoreCase)).ToList();
        }

        public List<Meal> GetMealsByCategory(string category)
        {
            return _meals.Find(i => i.Category == category).ToList();
        }

        public string RequestMeal(Request request)
        {
            Meal meal = GetMealById(request.MealId);
            User user = _users.Find(i => i.Id == request.UserId).FirstOrDefault();

            if (user.Points < meal.Price) return "You do not have enough points for this meal.";

            if (meal.Requests.Count >= meal.MaxPeople) return "This meal has reached it's max capacity of people, no more places available";
            foreach(var req in meal.Requests)
            {
                if (req.Userid == request.UserId) return "You have already requested this meal, please wait for a reply.";
            }

            MealRequest mealRequest = new MealRequest();
            mealRequest.Userid = request.UserId;
            mealRequest.Status = "Pending";
            mealRequest.Points = meal.Price;

            user.Points = user.Points - meal.Price;
            user.RequestedMeals.Add(request.MealId);
            _users.ReplaceOne(i => i.Id == request.UserId, user);

            var update = Builders<Meal>.Update.Push("Requests", mealRequest);
            var filter = Builders<Meal>.Filter.Eq("_id", ObjectId.Parse(request.MealId));
            _meals.UpdateOne(filter, update);

            return "You have succesfully requested a meal.";
        }

        public string AcceptRequest(Request request)
        {
            Meal meal = GetMealById(request.MealId);
            User cook = _users.Find(i => i.Id == meal.CookId).FirstOrDefault();
            MealRequest? mealrequest = null;

            foreach (var req in meal.Requests.ToList())
            {
                if (req.Userid != request.UserId) continue;
                mealrequest = req;
                meal.Requests.Remove(req);
            }
            if (mealrequest == null) return "This user has not requested this meal.";
            if (mealrequest.Status == "Accepted") return "You have already accepted this meal request.";

            cook.Points = cook.Points + meal.Price;
            _users.ReplaceOne(i => i.Id == cook.Id, cook);
            mealrequest.Status = "Accepted";

            meal.Requests.Add(mealrequest);
            _meals.ReplaceOne(i => i._id == request.MealId, meal);

            return "You have succesfully accepted a meal request.";
        }
        public string DeclineRequest(Request request)
        {
            Meal meal = GetMealById(request.MealId);
            MealRequest? mealrequest = null;

            foreach (var req in meal.Requests.ToList())
            {
                if (req.Userid != request.UserId) continue;
                mealrequest = req;
                meal.Requests.Remove(req);
            }

            if (mealrequest == null) return "This user has not requested this meal.";
            if (mealrequest.Status == "Accepted") return "You have already accepted this meal request.";

            _meals.ReplaceOne(i => i._id == request.MealId, meal);

            User user = _users.Find(i => i.Id == request.UserId).FirstOrDefault();
            user.Points = user.Points + meal.Price;
            user.RequestedMeals.Remove(request.MealId);
            _users.ReplaceOne(i => i.Id == request.UserId, user);

            return "You have succesfully declined a meal request.";
        }

        public List<Meal> GetRequestedMeals(string userid) 
        {
            var mealids = _users.Find(i => i.Id == userid).FirstOrDefault().RequestedMeals.ToList();
            var filter = Builders<Meal>.Filter.In("_id", mealids);
            return _meals.Find(filter).ToList();
        }

        public List<Meal> GetCookedMeals(string userid)
        {
            var mealids = _users.Find(i => i.Id == userid).FirstOrDefault().CookedMeals.ToList();
            var filter = Builders<Meal>.Filter.In("_id", mealids);
            return _meals.Find(filter).ToList();
        }
    }
}
