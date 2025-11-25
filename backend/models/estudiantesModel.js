const db = require("./db");

const Estudiantes = {
  getAll: (callback) => db.query("SELECT * FROM estudiantes", callback),

  create: (data, callback) =>
    db.query("INSERT INTO estudiantes SET ?", data, callback),

  delete: (id, callback) =>
    db.query("DELETE FROM estudiantes WHERE id = ?", [id], callback)
};

module.exports = Estudiantes;