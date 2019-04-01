const store = require('store')
const YummlyAxios = require('../YummlyAxios')

function set_metadata(metadataTitle, metadata) {
    console.log(metadataTitle);
}

const MetadataController = {
    getIngredients: () => {

        YummlyAxios.get('metadata/ingredient?').then(res => {
            let ingredients = MetadataController.parseData(res);

            store.set('ingredients', ingredients)
            console.log(store.get('ingredients')[0])
        })
    },

    parseData: (res) => {
        let dataStr = res.data.replace(`set_metadata('ingredient', `, '');
        dataStr = dataStr.replace(');', '');
        return JSON.parse(dataStr);
    }
}

module.exports = MetadataController;