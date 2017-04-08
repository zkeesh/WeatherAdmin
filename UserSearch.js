var weather = require('weather-js');

function UserSearch(userName, userLocation) {
	this.userName = userName;
	this.userLocation = userLocation;
	this.date = Date.now();
	this.getWeather = function() {
		weather.find({search: userLocation, degreeType: 'F'}, function(err, result) {
		  if(err) console.log(err);
		 
		  console.log(JSON.stringify(result, null, 2));
		});
	}
}

module.exports = UserSearch;
 