const searchObject = {
    requiredMeals: {
        breakfast: true,
        lunch: true,
        snack: true,
        dinner: true,
        dessert: true
    }
}

let searchString = `recipes?&maxResult=100`

//recipes?_app_id=YOUR_ID&_app_key=YOUR_APP_KEY&q=onion+soup&allowedIngredient[]=garlic&allowedIngredient[]=cognac

const RecipeStringHelper = {
    allowedIngredients: (allowedIngredients) => {

        //create an array of allowed ingredients
        //allowed ingredients uses an AND operator on the API side so including them all in one request can very quickly return 0 results
        return allowedIngredients.map(ingredient => `&allowedIngredient[]=${ingredient}`)

    },
    allowedAllergies: (allowedAllergies) => {
        let allowedAllergiesString = ""

        allowedAllergies.forEach(allergy => {
            allowedAllergiesString += `&allowedAllergy[]=${allergy}`
        });

        return allowedAllergiesString

    },
    allowedDiets: (allowedDiets) => {
        let allowedDietsString = ""

        allowedDiets.forEach(diet => {
            allowedDietsString += `&allowedDiet[]=${diet}`
        });

        return allowedDietsString
    },
    allowedCuisines: (allowedCuisines) => {
        //If you specify multiple allowed diets, cuisines, holidays, or courses, OR is implied: a recipe must match at least one of the diets, one of the cuisines, etc.

    }
}

module.exports = RecipeStringHelper