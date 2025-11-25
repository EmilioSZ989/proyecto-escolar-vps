
const db = require("./db");

const Materias = {
  getAll: (callback) => db.query("SELECT * FROM materias", callback),

  create: (data, callback) =>
    db.query("INSERT INTO materias SET ?", data, callback),

  update: (id, data, callback) =>
    db.query("UPDATE materias SET ? WHERE id = ?", [data, id], callback),

  delete: (id, callback) =>
    db.query("DELETE FROM materias WHERE id = ?", [id], callback)
};

module.exports = Materias;