const express = require("express");
//cojemos una de las funciones de express para el enroutado.
const router = express.Router();
  
router.post("/", function (req, res) {
  let db = req.app.locals.db;
  db.collection("Clientes").insertOne(req.body, function (err, result) {
    if (err != undefined) {
      console.log("algo ha salido mal, vuelta a intentarlo en unos minutos");
    } else {
      res.send({ message: "registrado correctamente" });
    }
  });

  console.log(req.body);
});

module.exports = router;
