import express from "express";
var mysql = require ('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sampleDB'
});

connection.connect(function(error){

    if (!!error){
        console.log('Error');
    } else {
        console.log('Connected');
    }

});

app.get('/', function(req, res){
    connection.query("SELECT * FROM locs", function(error, rows, fields){
        if (!!error){
            console.log('Error in the query');
        } else {
            console.log('Successful query');
            console.log(rows);
        }
    })
})