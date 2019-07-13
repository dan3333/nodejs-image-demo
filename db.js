const mongoose = require('mongoose');

// A temporary instance of a mongodb locally just to test app functionality, parameters will be omitted from repo once actual db server is used.

const MONGO_USERNAME = 'dan';
const MONGO_PASSWORD = 'temp_pass'; 
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'testdb';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, {useNewUrlParser: true});
