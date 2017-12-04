var express = require("express");
var app = express();
var pg = require("pg")
var routes =require("./route.js");


app.use(express.static(__dirname + "/public"));
app.use("/", routes);

var server = app.listen(8080, function(req, res) {
    console.log("waz up I am running");
});
