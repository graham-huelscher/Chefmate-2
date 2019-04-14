const YummlyAxios = require('../Config/YummlyAxios')
const RecipeStringHelper = require('./RecipeStringHelper')

const searchObject = {
    requiredMeals: {
        breakfast: true,
        lunch: true,
        snack: true,
        dinner: true,
        side: true,
        dessert: true
    }
}

const apiCallsObject = {

}

let searchString = `recipes?&maxResult=100`

//recipes?_app_id=YOUR_ID&_app_key=YOUR_APP_KEY&q=onion+soup&allowedIngredient[]=garlic&allowedIngredient[]=cognac

const RecipeController = {
    getWeeklyRecipes: (SO) => {
        return new Promise((resolve, reject) => {

            const requiredMeals = Object.assign({}, searchObject.requiredMeals)

            let searchString = `recipes?&maxResult=100`
            console.log(RecipeStringHelper.arrayCombine(['Seafood', 'Peanut'], 'allowedAllergies'))

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