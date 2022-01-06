var express = require('express');
var app = express();




app.get("/demo", (req, res) => {
    res.send("Hello Express");
});



module.exports = app;



