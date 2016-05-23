var express = require('express');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');

var db = new Sequelize('nomise', null, null, {
    host: 'localhost'
    dialect: 'postgres'
});
var app = express();

app.get('/', function (req, res){
    res.sendFile('index.html')
});

app.listen('3000', function (){
    console.log('Server up!')
});