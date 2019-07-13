const express = require('express');
const router = express.Router();
const apartment = require('../controllers/apartments');

router.get('/', function(req, res){
    apartment.index(req,res);
});

router.post('/addapartment', function(req, res) {
    apartment.create(req,res);
});

router.get('/getapartment', function(req, res) {
    apartment.list(req,res);
});

module.exports = router;
