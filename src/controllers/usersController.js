const { createUser, getUserInfo } = require("../modules/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getUser = async (req, res) => {
  try {
    const user = await getUserInfo(req.user.email);
    res.status(200).json([user]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.authenticateUser = async (req, res) => {
  try {
    const user = await getUserInfo(req.body.email);
    if (user && (await bcrypt.compareSync(req.body.password, user.password))) {
      const token = jwt.sign(
        {
          email: user.email,
          id: user.id,
          rol: user.rol,
          lenguage: user.lenguage,
        },
        process.env.JWT_KEY
      );
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: "Email o contraseña inválidos" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
