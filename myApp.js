
require('dotenv').config();

var path = require('path');
var express = require('express');
var app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);

    next();
});

app.use(express.static("public"));
app.use("/public", express.static("public"));

const data = {"message": "Hello json"};

app.get("/json", (req, res) => {

    if (process.env.MESSAGE_STYLE === "uppercase") {
        data.message = data.message.toUpperCase();
    }

    res.json(data);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

const now = {time: null};

app.get('/now', (req, res, next) => {
    now.time = new Date().toString();
    next();
}, (req, res) => {
    res.json(now);
});

app.get('/:word/echo', (req, res, next) => {
    res.json({echo: req.params.word});
});


module.exports = app;

