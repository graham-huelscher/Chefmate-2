
const RecipeStringHelper = {
    getMainApiString: (searchObject) => {

        const { excludedIngredient, allowedAllergy, allowedDiet, excludedCuisine } = searchObject

        return (
            'recipes?&maxResult=100' +
            RecipeStringHelper.singleStringCombine(excludedIngredient, 'excludedIngredient') +
            RecipeStringHelper.singleStringCombine(allowedAllergy, 'allowedAllergy') +
            RecipeStringHelper.singleStringCombine(allowedDiet, 'allowedDiet') +
            RecipeStringHelper.singleStringCombine(excludedCuisine, 'excludedCuisine')
        )

    },
    arrayCombine: (arrayOfItems, joiningString) => {
        //create an array of allowed items
        /*allowed ingredients and cuisines uses an AND operator on the 
        API side so including them all in one request can very quickly return 0 results
        */
        return arrayOfItems.map(item => `&${joiningString}[]=${item}`)

    },
    singleStringCombine: (arrayOfItems, joiningString) => {
        /* generic function for taking an array of items and combining them into a 
        single API call string. Joining on the joiningString parameter.
        ex: arrayOfItems: [Seafood, Peanut]
        joiningString: allowedAllergy
        combinedString = '&allowedAllergy[]=Seafood&allowedAllergy[]=Peanut*/
        let combinedString = ""

        arrayOfItems.forEach(item => {
            combinedString += `&${joiningString}[]=${item}`
        })

        return combinedString
    },
    breakfast: (searchString) => {
        return searchString + `&allowedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Appetizers&excludedCourse[]=course^course-Salads&excludedCourse[]=course^course-Soups&excludedCourse[]=course^course-Snacks&excludedCourse[]=course^course-Lunch${RecipeStringHelper.alwaysExcludedCourses()}`
    },
    lunch: (searchString) => {
        return searchString + `&allowedCourse[]=course^course-Lunch&excludedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Appetizers&excludedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Soups&excludedCourse[]=course^course-Snacks${RecipeStringHelper.alwaysExcludedCourses()}`
    },
    dinner: (searchString) => {
        return searchString + `&allowedCourse[]=course^course-Main Dishes&excludedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Appetizers&excludedCourse[]=course^course-Salads&excludedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Soups&excludedCourse[]=course^course-Snacks&excludedCourse[]=course^course-Lunch${RecipeStringHelper.alwaysExcludedCourses()}`
    },
    side: (searchString) => {
        return searchString + `&allowedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Main Dishes&excludedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Soups&excludedCourse[]=course^course-Snacks&excludedCourse[]=course^course-Lunch${RecipeStringHelper.alwaysExcludedCourses()}`
    },
    snack: (searchString) => {
        return searchString + `&allowedCourse[]=course^course-Snacks&excludedCourse[]=course^course-Main Dishes&excludedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Salads&excludedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Soups&excludedCourse[]=course^course-Lunch${RecipeStringHelper.alwaysExcludedCourses()}`
    },
    dessert: (searchString) => {
        return searchString + `&allowedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Main Dishes&excludedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Appetizers&excludedCourse[]=course^course-Salads&excludedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Soups&excludedCourse[]=course^course-Lunch${RecipeStringHelper.alwaysExcludedCourses()}`
    },
    alwaysExcludedCourses: () => {
        return '&excludedCourse[]=course^course-Breads&excludedCourse[]=course^course-Beverages&excludedCourse[]=course^course-Condiments and Sauces&excludedCourse[]=course^course-Cocktails'
    }

}

module.exports = RecipeStringHelper