const data = require('../data/hotels');

module.exports = app => {
    app.get('/api/hotels', (req, res) => {
        if (req.query.name && !req.query.stars) {
            return res.send(data.filter(hotel => hotel.name.toLowerCase().includes(req.query.name.toLowerCase())));
        }
        if (req.query.stars && !req.query.name) {
            return res.send(data.filter(hotel => hotel.stars.toString() === req.query.stars));
        }
        if (req.query.name && req.query.stars) {
            return res.send(data.filter((hotel) => {
                if (hotel.name.toLowerCase().includes(req.query.name.toLowerCase()) && hotel.stars.toString() === req.query.stars) {
                    return hotel;
                }
            }))
        }
        res.send(data);
    })
}