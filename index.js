const express = require("express");
const mongodb = require("mongodb");
const app = express();
const clients = require("./routes/registro");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/registro", registrer);

let MongoClient = mongodb.MongoClient;

//conexion mongo
MongoClient.connect("mongodb://127.0.0.1:27017", function (error, client) {
  if (error != undefined) {
    console.log(error);
  } else {
    app.locals.db = client.db("loQueQuiera");
  }
});

// por los hosting, si encuentras un puerto PORT LEVANTA LA APP EN ESE PUERTO SI NO USA EL 3000.
app.listen(3000 || process.env.PORT);