const express = require('express');
const app = express();
const router = express.Router();

const db = require('./db');
const apartments = require('./routes/apartments');

const path = __dirname + '/views/';
const port = 8080;
/*
router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/',function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/apartments',function(req,res){
  res.sendFile(path + 'apartments.html');
});
*/
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
//app.use('/', router);
app.use('/apartments',apartments)

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
