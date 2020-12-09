const _ = require('lodash');

const cars = [
    {
        Make: 'Ford',
        Model: 'F10',
        Package: 'Base',
        Color: 'Silver',
        Year: '2010',
        Category: 'Truck',
        Mileage: '120123',
        Price: '19999900',
        Id: 'JHk290Xj'
    },
    {
        Make: 'Toyota',
        Model: 'Camry',
        Package: 'SE',
        Color: 'White',
        Year: '2019',
        Category: 'Sedan',
        Mileage: '3999',
        Price: '2275000',
        Id: 'fWI37Ia'
    },
    {
        Make: 'Toyota',
        Model: 'Rav4',
        Package: 'XSE',
        Color: 'Red',
        Year: '2018',
        Category: 'SUV',
        Mileage: '24001',
        Price: '2275000',
        Id: '1i3xjRIIc'
    },
    {
        Make: 'Ford',
        Model: 'Bronco',
        Package: 'Badlands',
        Color: 'Bumt Orange',
        Year: '2022',
        Category: 'SUV',
        Mileage: '1',
        Price: '4499000',
        Id: 'dku43920s'
    },
];

async function getCars(req, res) {
    try {
        return res.status(200).json({
            statusCode: 200,
            data: {
                cars
            },
        });
    } catch (e) {
        return res.status(500).json({
            statusCode: 500,
            error: [{msg: "server_error", errorCode: 'serverError'}],
        })
    }
}

async function getCarById(req, res) {
    try {
        let id = req.params.id;
        let car = _.find(cars, {Id: id});
        if(!Boolean(car)){
            return res.status(404).json({
                statusCode: 404,
                error: [{msg: "not_found_error", errorCode: 'notExist'}],
            })
        }
        return res.status(200).json({
            statusCode: 200,
            data: {
                car
            },
        });
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
