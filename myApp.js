var path = require('path');

var express = require('express');
var app = express();

//app.use(express.static(path.join(__dirname, "public")));
//app.use(express.static(path.join(__dirname, "views")));

const data = {"message": "Hello json"}

app.get("/json", (req, res) => {
    res.json(data);
});

module.exports = app;


