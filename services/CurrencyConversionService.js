const axios = require('axios');

// todo: .env
const API_KEY='a81d49e87300a5f838a176ed61b98474'
const BASE_URL='http://apilayer.net/api/live'

exports.getExchangeRate = async (from, to) => {
    try {
        const response = await axios.get(`${BASE_URL}?access_key=${API_KEY}&currencies=${to}&source=${from}&format=1`);

        if (!response.data.success) {
            throw new Error('Failed to fetch exchange rates');
        }

        const rate = response.data.quotes[`${from}${to}`];
        if (!rate) {
            throw new Error('Invalid currency pair');
        } 

        return rate;
    } catch (error) {
        throw new Error(error.message);
    }
};
