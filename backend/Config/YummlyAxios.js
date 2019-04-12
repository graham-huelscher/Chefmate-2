const axios = require('axios');

const YummlyAxios = axios.create({
    baseURL: 'https://api.yummly.com/v1/api/',
    timeout: 10000,
    headers: {
        'X-Yummly-App-ID': process.env.YummlyId,
        'X-Yummly-App-Key': process.env.YummlyKey
    }
});

module.exports = YummlyAxios;