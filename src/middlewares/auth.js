const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authToken = req.headers.authorization.split(" ")[1];
  if (!authToken) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }
  let verifyToken;
  try {
    verifyToken = jwt.verify(authToken, process.env.JWT_KEY, { expiresIn: 60 });
  } catch (error) {
    res.status(401).json({ message: "Token no valido" });
  }
  if (!verifyToken) {
    return res.status(401).json({ message: "Error al verificar token" });
  }
  req.user = verifyToken;
  next();
};
