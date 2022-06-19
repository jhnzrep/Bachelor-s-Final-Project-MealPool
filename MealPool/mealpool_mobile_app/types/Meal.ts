type Meal = {
    cookId: string;
    nameVal: string;
    spotsVal: number;
    dateItemVal: Date;
    categoryVal: string;
    descriptionVal: string;
    streetVal: string;
    cityVal: string;
    countryVal: string;
    postalCodeVal: string;
    priceVal: number;
};
  
type MealSearch = {
    searchVal: string;
};

type MealRequest = {
    userId: string;
    mealId: string;
}

