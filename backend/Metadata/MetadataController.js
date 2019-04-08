const YummlyAxios = require('../YummlyAxios')
const { Cuisines, Allergies, Diets, Ingredients } = require('./MetadataSchemas')

const test = require('./MetadataSchemas/test')

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

            // let ifModifedSince = {}

            // if (store.get(title)) {
            //     ifModifedSince = {'headers': {'If-Modified-Since': store.getTime(title)}}
            // }

            // console.log(ifModifedSince)

            YummlyAxios.get(`metadata/${title}`).then(res => {
                let data = MetadataController.parseData(res, title);

                MetadataController.addDataToAppropriateDBCollection(title, data);

            })
        }
    },
    filterMetadataSchemas: async () => {

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
        let dataStr = res.data.replace(`set_metadata('${title}', `, '');
        dataStr = dataStr.replace(');', '');
        return JSON.parse(dataStr);
    },
    addDataToAppropriateDBCollection: (title, data) => {
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