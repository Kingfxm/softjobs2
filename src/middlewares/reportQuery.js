exports.reportQuery = async (req, res, next) => {
  const params = req.query;
  const url = req.url;
  console.log(
    `Hoy ${new Date()} se ha hecho una consulta tipo ${
      req.method
    } a ${url} con los parametros ${JSON.stringify(params)}`
  );
  next();
};
