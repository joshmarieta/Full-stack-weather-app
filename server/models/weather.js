const request = require('request-promise');

//require('dotenv').config();

const API_URL='88d8732d1c143061a6b42a95e347cf1a'

class weather {
  static retrieveByCity(city,callback){
    request({
      url:`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_URL}&units=imperial`,
      json: true
    }).then(function(res){
      callback(res);
    }).catch(function(err){
      console.log(err);
      callback({error: 'Could not reach WeatherMap API'})
      });
  }
}
module.exports = weather;
