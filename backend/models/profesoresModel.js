const db = require("./db");

const Profesores = {
  getAll: (callback) => db.query("SELECT * FROM profesores", callback),

  create: (data, callback) =>
    db.query("INSERT INTO profesores SET ?", data, callback),

  delete: (id, callback) =>
    db.query("DELETE FROM profesores WHERE id = ?", [id], callback)
};

module.exports = Profesores;