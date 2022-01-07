var express = require('express');
var app = express();


app.get("/demo", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");

    console.log(__dirname);

    app.use('/public', express.static("public"));
});



module.exports = app;



