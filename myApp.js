var express = require('express');
var app = express();


app.get("/demo", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});



module.exports = app;



