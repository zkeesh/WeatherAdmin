var fs = require("fs");
var UserSearch = require("./UserSearch");

function WeatherAdmin(userName, userLocation){
	this.userName = userName;
	this.getData() = function(){
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

	}

}

