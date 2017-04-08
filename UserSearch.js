var weather = require('weather-js');

var arrayOfLocations = [];

function UserSearch(userName, userLocation) {
	this.userName = userName;
	this.userLocation = userLocation;
	this.date = Date.now();
	this.getWeather = function() {
		weather.find({search: userLocation, degreeType: 'F'}, function(err, result) {
		  if(err) console.log(err);
		 
		  // console.log(JSON.stringify(result, null, 2));
		  var cityName = result[0].location.name
		  // console.log(result[0].location.name);
		  arrayOfLocations.push(cityName);


		});
	}
}

module.exports = UserSearch;
 