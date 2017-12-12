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
  var stuff = req.body;
  var orderString = "";
        stuff.order.forEach(function(item){
            var obj= "";
            obj = "Restaurant: "+ item.restaurant +" Item: "+ item.name + " Price: $ "+ item.price;
            orderString += obj;
        });
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fauxEmail2017@gmail.com',
      pass: 'grandcircus2017'
    }
  });

  
  var mailOptions = {
    from: stuff.emailAddress,
    to: stuff.emailAddress,
    subject: 'Frugal Foo-d Reciept',
    html: '<table><tr><td align="center"><img height="200px" src="https://lh3.googleusercontent.com/jAP2nXEXKierPmqbWRFu1ZcnuOqcWPfZFc9TUlBtXouaejIAKdWB82-E5MSdPtNldtZtrORtLzGqr1W_QQ1Xr_eTOHM_UfXttIhJF2lylc-QodkduMfPSkHvPnwot9eHgYoF2AydFTYQU3Zc7099WSXRlNlMRf27RebjyQZsq2kLAzeN6A7gzl-JSjn0wMN-mX51D3ytiShv3bOnQv8lW6xGkzKTNTnxwgOAAd66SZIetWzAuNoMXfPdyOFBkObxHRk7s2-ZiwzLZbUNpogKnPeps0btICZDW9RJZWatXP_AE-aeUa3JEwbB4L4zDIj96xIAYf_nEGN7UcyWewq27RqNfUl-7-m44VwYvaOxP275Jchglf480l9PDJPsSZHmUv8bYb_HH3tyx9wdTh95V2A7OJSQ33k1Q0Rn6KzykmxLb-uoDeeOIABn2hTvnpiu17WzyLL1fSr2_xTmvTme12Ls-WyCrS071cxvxtiC24wQCKQBDMHGRzoPrW8I5vzsuYMnNzrvHeGjVdQWBpskU-1PcZddmNVEDAepj40XICrIAnW4fJvtl7G7Uyu9fucB8idv8NnLfPstdS4oSIPq71JUUEKpcBkMNz7h_RKJ1P62KScm8MpL7SOBGLNsPbTbt7-n7mpL6iQ-CoWJ0THNFLBpEmWwWwU7lA=w614-h579-no" /></td></tr><tr><td align="center" style="background: #A6FFDB;" width="800px"><h1 style="color: #B2351A;">Thank you for choosing Frugal Foodie!</h1></td></tr><tr><td align="center"><p>Order: ' + orderString + '</p><p>Budget: $' + stuff.budget + '</p><p>Total: $' + stuff.total + '</p><p>Comment: '+ stuff.comment +'</p></td></tr><tr><td align="center"><h1 style="color: #B2351A;">Check out the Developers&#39; LinkedIn Profiles!</h1></td></tr><tr><td align="center"><div style="inline"><a href="https://www.linkedin.com/in/morgan-mcpeak/" ><h2 style="color: #2CB280;">Morgan McPeak</h2></a>, <a href="https://www.linkedin.com/in/hilarycwilson/"><h2 style="color: #2CB280;">Hilary Wilson</h2></a>, <a href="https://www.linkedin.com/in/julietfrederick/"><h2 style="color: #2CB280;">Julie Frederick</h2></a></div></td></tr></table>'
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
