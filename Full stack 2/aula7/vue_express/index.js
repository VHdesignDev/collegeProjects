//servidor
var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://vitorhfagundes:987654321@cluster0.0tfbg1c.mongodb.net/";
var DATABASE_NAME = "aula7";
var database;

app.listen(5038, () => {
   MongoClient.connect(CONNECTION_STRING, (error, client) => {
      database = client.db(DATABASE_NAME);
      console.log("Conexao com Mongo DB Ativa");

   })
})


//carrega dados mongodb
app.get('/api/aula7/GetQuarto', (request, response) => {
   database.collection("aulaCollection").find({}).toArray((error, result) => {
      response.send(result);
   });
})
app.post('/api/aula7/AddQuarto', multer().none(), (request, response) => {
   database.collection("aulaCollection").count({}, function (error, numOfDocs) {
      database.collection("aulaCollection").insertOne({
         quarto: request.body.novoQuarto
      });
      response.json("Quarto inserido com sucesso");
   })
})
