const YummlyAxios = require('../Config/YummlyAxios')
const RecipeStringHelper = require('./RecipeStringHelper')

const searchObject = {
    allowedDiet: ['403^Paleo'],
    allowedAllergy: ['394^Peanut-Free', '398^Seafood-Free'],
    excludedIngredient: ['mushrooms', 'cream cheese'],
    excludedCuisine:['cuisine^cuisine-mexican'],
    requiredMeals: {
        breakfast: true,
        lunch: true,
        snack: true,
        dinner: true,
        side: true,
        dessert: true
    }
}

const RecipeController = {
    getWeeklyRecipes: (SO) => {
        return new Promise((resolve, reject) => {

            const requiredMeals = Object.assign({}, searchObject.requiredMeals)

            const mainApiString = RecipeStringHelper.getMainApiString(searchObject)

            for (let meal in requiredMeals) {
                requiredMeals[meal] = RecipeStringHelper[meal](mainApiString)
            }
            resolve(requiredMeals)


            // YummlyAxios.get('recipes?')
            //     .catch(error => console.log(error.response))
            //     .then(results => resolve(results.data.matches))
        })
    },
    getRecipeDetails: async (id) => {
        let response = await YummlyAxios.get(`recipe/${id}`)
        return response.data
    }


}

module.exports = RecipeController