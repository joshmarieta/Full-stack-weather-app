const request = require('request-promise');
//const API_URL = 'api key'

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
