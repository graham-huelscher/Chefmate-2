const data = {}

const store = {
    set: (key, value) => {
        data[key] = {
            value: value,
            time: new Date().toUTCString()
        }
    },
    get: (key) => {
        if(!data[key])
            return false
        return data[key].value
    },
    getTime: (key) => {
        if(!data[key])
            return false
        return data[key].time
    },
    drop: (key) => {
        delete data[key];
    }
}

module.exports = store