var express = require('express');
var app = express();
var path    = require("path");

app.use('/assets',            express.static(__dirname + '/assets'));
app.use('/images',            express.static(__dirname + '/images'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000, function () {
  console.log('Groezrock app listening on port 3000!');
})
