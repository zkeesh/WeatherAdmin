var WeatherAdmin = require("./WeatherAdmin");
var UserSearch = require("./UserSearch");
var fs = require("fs");

// Hold the value whether someone is an "admin" or "user"
var loginType = process.argv[2];

// If they are a user... they will also need to provide a "name"
var userName = process.argv[3];

// And they will need to provide a "location"
var userLocation = process.argv[4];

// Create an instance of the WeatherAdmin. Remember WeatherAdmin is a constructor! Not an object.
// var MyAdmin = new WeatherAdmin();

var arrayOfLocations = [];


if (loginType === "admin") {

  MyAdmin.getData();

}

else {

	var zachSearch = new UserSearch(userName, userLocation);
	// console.log(zachSearch);
	zachSearch.getWeather();


// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.appendFile("log.txt", userLocation + "\n" , function(err) {

  // If the code experiences any errors it will log the error to the console.
  if (err) {
    return console.log(err);
  }

  // Otherwise, it will print: "movies.txt was updated!"
  console.log("log.txt was updated!");
  

});

	// zachSearch.newUserSearch(userName, userLocation);

  // UserSearch.newUserSearch(userName, userLocation);

}