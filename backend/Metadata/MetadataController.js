const store = require('../store')
const YummlyAxios = require('../YummlyAxios')

const metadataTitles = ['ingredient', 'allergy', 'diet', 'cuisine']

const MetadataController = {
    getMetadata: () => {

        metadataTitles.forEach(title => {

            if (!store.get(title)) {
                console.log("executing api call")
                YummlyAxios.get(`metadata/${title}`).then(res => {
                    let data = MetadataController.parseData(res, title);

                    store.set(title, data)
                    console.log(store.get(title)[0])
                })
            }
            else
                console.log(store.get(title)[0])

        })




    },

    parseData: (res, title) => {
        let dataStr = res.data.replace(`set_metadata('${title}', `, '');
        dataStr = dataStr.replace(');', '');
        return JSON.parse(dataStr);
    }
}

module.exports = MetadataController;