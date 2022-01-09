var path = require('path');

var express = require('express');
var app = express();

app.use(express.static("public"));

//path.join(__dirname, 'public')


app.use("/public", express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
    console.log(__dirname);
});


module.exports = app;



