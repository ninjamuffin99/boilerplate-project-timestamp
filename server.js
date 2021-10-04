// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();



// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) { 
  res.json({greeting: 'hello API'});
});

app.get("/api", function(req, res)
{
  res.json({"unix": Math.floor(Date.now()), "utc": Date.now()});
});

app.get('/api/:time', function (req, res)
{


  var daDate = new Date(req.params.time);

  var funnyDate = new Date(Math.floor(req.params.time));
    

  if (daDate.toString() == "Invalid Date")
    daDate = funnyDate;
  console.log(funnyDate.toString());

  if (daDate.toString() == "Invalid Data")
    res.json({"error": daDate.toString()});
  else
  {
    let lolDate = "";

    // Thu, 01 Jan 1970 00:00:00 GMT
   
    let dumbassDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    lolDate += dumbassDays[daDate.getDay()] + ", ";

    res.json({"unix": Math.floor(daDate), "utc":lolDate});
  }
  
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
