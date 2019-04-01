const store = require('../store')
const YummlyAxios = require('../YummlyAxios')

const metadataTitles = ['ingredient','allergy','diet','cuisine']

const MetadataController = {
    getIngredients: () => {

        if(!store.get('ingredients')){
            console.log("executing api call")
            YummlyAxios.get('metadata/ingredient?').then(res => {
                let ingredients = MetadataController.parseData(res);
    
                store.set('ingredients', ingredients)
                console.log(store.get('ingredients')[0])
            })
        }
        else 
            console.log(store.get('ingredients')[0])

        
    },

    parseData: (res) => {
        let dataStr = res.data.replace(`set_metadata('ingredient', `, '');
        dataStr = dataStr.replace(');', '');
        return JSON.parse(dataStr);
    }
}

module.exports = MetadataController;