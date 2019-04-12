const YummlyAxios = require('../Config/YummlyAxios')

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

const RecipeController = {
    getWeeklyRecipes: (SO) => {
        return new Promise((resolve, reject) => {

            const requiredMeals = Object.assign({}, searchObject.requiredMeals)

            let searchString = `recipes?&maxResult=100`

            resolve(requiredMeals)


            // YummlyAxios.get('recipes?')
            //     .catch(error => console.log(error.response))
            //     .then(results => resolve(results.data.matches))
        })
    },





    getRecipeDetails: async (id) => {
        let response = await YummlyAxios.get(`recipe/${id}`)
        //console.log(response.data.attribution)
        return response.data
    }


}

module.exports = RecipeController