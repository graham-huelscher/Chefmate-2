const store = require('../store')
const YummlyAxios = require('../YummlyAxios')

const metadataTitles = ['ingredient', 'cuisine', 'allergy', 'diet']

const MetadataController = {
    getMetadata: () => {

        metadataTitles.forEach(title => {

            let ifModifedSince = {}

            if (store.get(title)) {
                ifModifedSince = {'headers': {'If-Modified-Since': store.getTime(title)}}
            }

            console.log(ifModifedSince)

            YummlyAxios.get(`metadata/${title}`, ifModifedSince).then(res => {
                let data = MetadataController.parseData(res, title);

                store.set(title, data)
                console.log(store.get(title)[0])
            })


        })




    },

    parseData: (res, title) => {
        let dataStr = res.data.replace(`set_metadata('${title}', `, '');
        dataStr = dataStr.replace(');', '');
        return JSON.parse(dataStr);
    }
}

module.exports = MetadataController;