const data = require('../data/hotels');
const fs = require('fs');

module.exports = app => {
    // Create a new Hotel
    app.post('/api/hotels', ({ body }, res) => {
        body['id'] = `${Math.floor(Math.random() * 999999) + 1}`;
        data[data.length] = body;
        fs.writeFile('data/hotels.json', JSON.stringify(data), (err) => {
            if (err) console.log('Error', err);
        });
        res.send(body);
    });
    // Retrieve all Hotels
    app.get('/api/hotels', (req, res) => {
        // Filtered by name
        if (req.query.name && !req.query.stars) {
            return res.send(data.filter(hotel => hotel.name.toLowerCase().includes(req.query.name.toLowerCase())));
        }
        // Filtered by stars
        if (req.query.stars && !req.query.name) {
            return res.send(data.filter(hotel => hotel.stars.toString() === req.query.stars));
        }
        // Filtered by name and stars
        if (req.query.name && req.query.stars) {
            return res.send(data.filter((hotel) => {
                if (hotel.name.toLowerCase().includes(req.query.name.toLowerCase()) && hotel.stars.toString() === req.query.stars) {
                    return hotel;
                }
            }))
        }
        res.send(data);
    });
    // Retrieve a single Hotel with id
    app.get('/api/hotels/:id', (req, res) => {
        return res.send(data.filter(hotel => hotel.id === req.params.id));
    });

    // Update a Hotel with id
    app.put('/api/hotels/:id', (req, res) => {
        fs.writeFile('data/hotels.json', JSON.stringify(data.map(hotel => {
            if (hotel.id === req.params.id) {
                Object.keys(req.body).map(key => {
                    hotel[key] = req.body[key];
                });
            } return hotel;
        })), (err => {
            if (err) console.log('Error', err);
        }));
        res.send({message: "Hotel updated successfully!"});
    });

    // Delete a Hotel with id
    app.delete('/api/hotels/:id', (req, res) => {
        fs.writeFile('data/hotels.json', JSON.stringify(data.filter(hotel => hotel.id !== req.params.id)), (err) => {
            if (err) console.log('Error', err);
        });
        res.send({message: "Hotel deleted successfully!"});
    });
}