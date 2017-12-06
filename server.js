var express = require("express");
var app = express();
var pg = require("pg")
var bodyParser = require("body-parser");
var routes =require("./route.js");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", routes);
var port = process.env.PORT || 8080;
var server = app.listen(8080, function(req, res) {
    console.log("waz up I am running");
});