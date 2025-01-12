const { pool } = require("../config/db");

exports.getUserInfo = async (email) => {
  try {
    const query = "SELECT * FROM usuarios WHERE email = $1";
    const values = [email];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error("Error al obtener usuario");
  }
};

exports.createUser = async (user) => {
  try {
    const query =
      " INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4)";
    const values = [user.email, user.password, user.rol, user.lenguage];
    const result = await pool.query(query, values);
    return result;
  } catch (error) {
    throw new Error("Error al crear usuario");
  }
};
