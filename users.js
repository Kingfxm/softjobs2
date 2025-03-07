const express = require("express");
const routes = require("./src/routes/index");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes());
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto " + port);
});
