const axios = require('axios');

const yummlyAxios = axios.create({
    baseURL: 'http://api.yummly.com/v1/api/',
    timeout: 10000,
    headers: {
        'X-Yummly-App-ID': process.env.YummlyId,
        'X-Yummly-App-Key': process.env.YummlyKey
    }
});

const RecipeController = {
    getWeeklyRecipes: (searchObject) => {
        return new Promise((resolve, reject) => {
            yummlyAxios.get('recipes?')
                .catch(error => console.log(error.response))
                .then(results => resolve(results.data.matches))
        })
    }

}

module.exports = RecipeController