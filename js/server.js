var express = require('express');
var path = require('path');
var app = express();

app.get('/', (req, res) =>{
  res.sendFile()
});

app.listen(8080);
