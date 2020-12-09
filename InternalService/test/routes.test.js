const request = require('supertest');
const app = require('../server.js');

describe('GET /cars', function() {
    it('should return cars array of json', (done) => {
        request(app)
            .get('/cars')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

});

describe('GET /cars/dku43920s', function() {
    it('should return car json', (done) => {
        request(app)
            .get('/cars/dku43920s')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

});

/*describe('GET /acars', function() {
    it('should return cars array of json', (done) => {
        request(app)
            .get('/acars')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});*/

describe('GET /cars/123456', function() {
    it('should return car json', (done) => {
        request(app)
            .get('/cars/123456')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

});
