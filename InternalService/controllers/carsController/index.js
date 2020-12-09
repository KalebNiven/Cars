const axios = require('axios');

axios.defaults.baseURL = 'http://192.168.29.129:8000/';
// axios.defaults.baseURL = 'http://127.0.0.1:8000/';
// axios.defaults.baseURL = 'end_server:8000';
axios.defaults.headers = {
    'Content-Type': 'application/json',
};

async function getCars(req, res) {
    try {
        let carsRes = await axios.get(`cars`);
        let cars = carsRes.data;
        return res.status(200).json(cars);
    } catch (e) {
        console.log('error ==> ', e)
        return res.status(500).json({
            statusCode: 500,
            error: [{
                msg: "server_error", 
                errorCode: 'serverError',
                errors: e,
            }],
        })
    }
}

async function getCarById(req, res) {
    try {
        let id = req.params.id;
        let carRes = await axios.get(`cars/${id}`);
        let car = carRes.data;
        return res.status(200).json(car);
    } catch (e) {
        return res.status(500).json({
            statusCode: 500,
            error: [{msg: "server_error", errorCode: 'serverError'}],
        })
    }
}

module.exports = {
    getCars,
    getCarById,
};
