var path = require('path');

var express = require('express');
var app = express();

app.use(express.static("public"));
app.use("/public", express.static("public"));

const data = {"message": "Hello json"};

app.get("/json", (req, res) => {
    res.json(data);
});

app.get("/", (req, res) => {
console.log(__dirname);
    res.sendFile(__dirname + "/views/index.html");
});


module.exports = app;

