var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
    console.log(__dirname);
});


module.exports = app;



