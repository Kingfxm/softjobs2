const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const auth = require("../middlewares/auth");
const { reportQuery } = require("../middlewares/reportQuery");

module.exports = () => {
  router.get("/", (req, res) => {
    res.send("Bienvenido al API de Soft Jobs");
  });

  router.get("/usuarios", reportQuery, auth, usersController.getUser);
  router.post("/usuarios", reportQuery, usersController.createUser);
  router.post("/login", reportQuery, usersController.authenticateUser);
  return router;
};
