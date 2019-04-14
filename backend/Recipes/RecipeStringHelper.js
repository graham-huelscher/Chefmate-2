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

const RecipeStringHelper = {
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
    breakfastString: (searchString) => {
        return searchString + `&allowedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Appetizers&excludedCourse[]=course^course-Salads&excludedCourse[]=course^course-Soups&excludedCourse[]=course^course-Snacks&excludedCourse[]=course^course-Lunch${RecipeStringHelper.alwaysExcludedCourses()}`
    },
    lunchString: (searchString) => {
        return searchString + `&allowedCourse[]=course^course-Lunch&excludedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Appetizers&excludedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Soups&excludedCourse[]=course^course-Snacks${RecipeStringHelper.alwaysExcludedCourses()}`
    },
    dinnerString: (searchString) => {
        return searchString + `&allowedCourse[]=course^course-Main Dishes&excludedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Appetizers&excludedCourse[]=course^course-Salads&excludedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Soups&excludedCourse[]=course^course-Snacks&excludedCourse[]=course^course-Lunch${RecipeStringHelper.alwaysExcludedCourses()}`
    },
    sideString: (searchString) => {
        return searchString + `&allowedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Main Dishes&excludedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Soups&excludedCourse[]=course^course-Snacks&excludedCourse[]=course^course-Lunch${RecipeStringHelper.alwaysExcludedCourses()}`
    },
    snackString: (searchString) => {
        return searchString + `&allowedCourse[]=course^course-Snacks&excludedCourse[]=course^course-Main Dishes&excludedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Salads&excludedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Soups&excludedCourse[]=course^course-Lunch${RecipeStringHelper.alwaysExcludedCourses()}`
    },
    dessertString: (searchString) => {
        return searchString + `&allowedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Main Dishes&excludedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Appetizers&excludedCourse[]=course^course-Salads&excludedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Soups&excludedCourse[]=course^course-Lunch${RecipeStringHelper.alwaysExcludedCourses()}`
    },
    alwaysExcludedCourses: () => {
        return '&excludedCourse[]=course^course-Breads&excludedCourse[]=course^course-Beverages&excludedCourse[]=course^course-Condiments and Sauces&excludedCourse[]=course^course-Cocktails'
    }

}

module.exports = RecipeStringHelper