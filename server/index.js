const path = require('path');//nodejs native module
const express = require('express');//backend server framework
const bodyParser = require('body-parser');//doing htttp interpratation

var db = require('./database');//import our databse

const ENV = process.env.NODE_ENV;//tell us if we are working in development or production
const PORT = process.env.PORT || 5000;

const app = express();
//adding the middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/cities',require('./api/cities'));
app.use('/api/weather',require('./api/weather'));

//make our express responsive to request
app.listen(PORT, ()=>{
  console.log(`Server up and running on port ${PORT}..`)
});

db.query('SELECT NOW()', (err,res)=>{
  if(err.error)
    return console.log(err.error);
  console.log(`PostgreSQL connected: ${res[0].now}.`);
})

//export app variable
module.exports = app;

