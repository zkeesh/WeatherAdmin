var WeatherAdmin = require("./WeatherAdmin");
var UserSearch = require("./UserSearch.js");

// Hold the value whether someone is an "admin" or "user"
var loginType = process.argv[2];

// If they are a user... they will also need to provide a "name"
var userName = process.argv[3];

// And they will need to provide a "location"
var userLocation = process.argv[4];

// Create an instance of the WeatherAdmin. Remember WeatherAdmin is a constructor! Not an object.
// var MyAdmin = new WeatherAdmin();


if (loginType === "admin") {

  MyAdmin.getData();

}

else {

	var zachSearch = new UserSearch(userName, userLocation);
	console.log(zachSearch);

	// zachSearch.newUserSearch(userName, userLocation);

  // UserSearch.newUserSearch(userName, userLocation);

}