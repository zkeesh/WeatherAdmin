var weather = require('weather-js');

function UserSearch(userName, userLocation) {
	// this.userName = userName;
	// this.userLocation = userLocation;
	// this.date = Date.now();
	this.newUserSearch = function(userName, userLocation) {
		apiCall(userLocation);
	}
	this.getWeather = function() {
		console.log(newUserSearch);
	}
}

module.exports = UserSearch;
 
// Options: 
// search:     location name or zipcode 
// degreeType: F or C 
var apiCall = function(userLocation) {
weather.find({search: userLocation, degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
  console.log(JSON.stringify(result, null, 2));
});

};