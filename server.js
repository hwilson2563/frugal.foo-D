var express = require("express");
var app = express();
var pg = require("pg")
var bodyParser = require("body-parser");
var routes =require("./route.js");
var nodemailer = require("nodemailer");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", routes);

app.post("/email", function(req, res){

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fauxEmail2017@gmail.com',
      pass: 'grandcircus2017'
    }
  });
  
  var mailOptions = {
    from: 'jules.tf4@yahoo.com',
    to: 'jules.tf4@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

});

var port = process.env.PORT || 5000;
var server = app.listen(5000, function(req, res) {
    console.log("waz up I am running");
});
