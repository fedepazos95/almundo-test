const data = require('../data/hotels');

module.exports = app => {
    app.get('/api/hotels', (req, res) => {
        res.send(data);
    })
}