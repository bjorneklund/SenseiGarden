var admin = require('firebase-admin');
var express = require('express');

var serviceAccount = require("../Keys/senseigarden.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://senseigarden-df30d.firebaseio.com"
});


var app = express();
var port = 5000;


app.get("/", function(req,res){
	var db = admin.database();
	var ref = db.ref("logs/temperature");
	ref.set(
	{
		"name":"basement",
		"value": 22.4
	},function(error){
		if(error){
			console.log("Error saving data");
		}else{
			console.log("Data saved successfully");
		}
	});

	res.send("OK");
});


app.listen(port, function function_name(argument) {
	// body...
	console.log("Listening on port: " + port);
});