var express = require("express");
var app = express();
var routes =require("./route.js");


app.use(express.static(__dirname + "/public"));
app.use("/", routes);

var port = process.env.PORT || 5000;

var server = app.listen(port, function(req, res) {
    console.log("waz up I am running");
});
