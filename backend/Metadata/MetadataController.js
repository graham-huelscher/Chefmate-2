const YummlyAxios = require('../Config/YummlyAxios')
const { Cuisines, Allergies, Diets, Ingredients } = require('./MetadataSchemas')

//object to be used for mongoDB model interaction
const metadataSchemas = {
    'cuisine': Cuisines,
    'allergy': Allergies,
    'diet': Diets,
    'ingredient': Ingredients
}

const MetadataController = {
    getMetadata: async () => {

        const missingMetadataSchemas = await MetadataController.filterMetadataSchemas()

        for (let title in missingMetadataSchemas) {

            //***********TODO: Utilize Yummly's ifModifiedSince functionality to automate the updating of the stored metadata */
            // let ifModifedSince = {}
            // if (store.get(title)) {
            //     ifModifedSince = {'headers': {'If-Modified-Since': store.getTime(title)}}
            // }
            // console.log(ifModifedSince)

            //Axios calls to Yummly api. The calls cycle through the missingMetadata defined earlier and then add the returned data to the mongoDB
            YummlyAxios.get(`metadata/${title}`).then(res => {
                let data = MetadataController.parseData(res, title);

                MetadataController.addDataToAppropriateDBCollection(title, data);

            })
        }
    },
    filterMetadataSchemas: async () => {
        //this function checks the mongoDB database for existing metadata and removes it from the axios call object if it is already in the DB
        const values = await Promise.all([Cuisines.find({}), Allergies.find({}), Diets.find({}), Ingredients.find({})])

        let valuesIndex = 0;
        const metadataSchemasCopy = Object.assign({}, metadataSchemas)
        for (let title in metadataSchemas) {
            if (values[valuesIndex].length) {
                console.log(`${title} already in database`)
                delete metadataSchemasCopy[title]
            }
            valuesIndex++;
        }
        return metadataSchemasCopy
    },
    parseData: (res, title) => {
        //this function parses the jsonp returned format from the yummly api and returns an array of objects
        let dataStr = res.data.replace(`set_metadata('${title}', `, '');
        dataStr = dataStr.replace(');', '');
        return JSON.parse(dataStr);
    },
    addDataToAppropriateDBCollection: (title, data) => {
        //this function adds the "data" to the correct MongoDB atlas mdoel
        metadataSchemas[title].insertMany(data, { ordered: false })
            .then(dbArr => {
                console.log(`${title} metadata added to database`)
            })
            .catch(err => {
                console.log(err);
            })
    }
}

module.exports = MetadataController;