var express = require('express');
var app = express();
var http = require('http');
var geoTz = require('geo-tz');

app.get('/timezone', function(req, res, next) {
  res.json(geoTz(req.query.latitude, req.query.longitude));
});

var httpServer = http.createServer(app);
httpServer.listen(80);

