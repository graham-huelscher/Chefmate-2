const YummlyAxios = require('../YummlyAxios')
const MetadataController = require('../Metadata/MetadataController')

const RecipeController = {
    getWeeklyRecipes: (searchObject) => {
        return new Promise((resolve, reject) => {
            MetadataController.getIngredients();
            YummlyAxios.get('recipes?')
                .catch(error => console.log(error.response))
                .then(results => resolve(results.data.matches))
        })
    }

}

module.exports = RecipeController