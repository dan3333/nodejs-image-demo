const path = require('path');
const Apartment = require('../models/apartments');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/apartments.html'));
};

exports.create = function (req, res) {
    var newApartment = new Apartment(req.body);
    console.log(req.body);
    newApartment.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save apartment to database');
        } else {
            res.redirect('/apartments/getapartment');
        }
  });
               };

exports.list = function (req, res) {
	Apartment.find({}).exec(function (err, apartments) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getapartment', {
                        apartments: apartments
             });
        });
};
