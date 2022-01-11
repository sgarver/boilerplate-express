var path = require('path');
var express = require('express');
var app = express();

require('dotenv').config();

app.use(express.static("public"));
app.use("/public", express.static("public"));

const data = {"message": "Hello json"};

app.get("/json", (req, res) => {

    if (process.env.MESSAGE_STYLE === "uppercase") {
        data.message = data.message.toLocaleUpperCase();
    }

    res.json(data);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});


module.exports = app;

