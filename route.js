var express = require("express");
var routes = express.Router();
var pool = require("./pg-connection-pool");

routes.get("/menus/:id", function(req, res) {
	var tableName = req.params;
	console.log(tableName);
    pool.query("select * from " + tableName.id).then(function(result){
        res.send(result.rows);
    });
});
module.exports = routes;



