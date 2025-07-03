var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app = Express();
app.use(cors());


// var CONNECTION_STRING = "mongodb+srv://isadoraEstudos:senhaSuperSecreta@cluster0.oilt4ju.mongodb.net/?retryWrites=true&w=majority"
var CONNECTION_STRING = "mongodb+srv://isadoraEstudos:senhaSuperSecreta@cluster0.oilt4ju.mongodb.net/"

var DATABASE_NAME = "aula7";
var database;

app.listen(5038, () => {
  MongoClient.connect(CONNECTION_STRING, (error, client) => {
    database = client.db(DATABASE_NAME);
    console.group("conexão com Mongo DB ativa");
  })
})

app.get('/api/aula7/GetQuarto', (request, response) => {

  database.collection("aulaCollection").find({}).toArray((error, result) => {
    response.send(result);
  });
})