const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public/"));

app.get("/", function(req, res){

    res.send("<h1> Main page </h1>");
});

app.get("/contact", function(req, res ){

    res.send("<h1>About</h1>");
});

app.listen(3000);