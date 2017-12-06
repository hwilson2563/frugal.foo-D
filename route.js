var express = require("express");
var routes = express.Router();
var pool = require("./pg-connection-pool");
routes.get("/goldcashgold", function(re, res) {
    pool.query("select * from goldcashgold").then(function(result){
        res.send(result.rows);
    });
});
module.exports = routes;
Add Comment Collapse



