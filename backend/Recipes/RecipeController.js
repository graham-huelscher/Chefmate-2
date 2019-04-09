const YummlyAxios = require('../Config/YummlyAxios')

const RecipeController = {
    getWeeklyRecipes: (searchObject) => {
        return new Promise((resolve, reject) => {
            YummlyAxios.get('recipes?')
                .catch(error => console.log(error.response))
                .then(results => resolve(results.data.matches))
        })
    }

}

module.exports = RecipeController