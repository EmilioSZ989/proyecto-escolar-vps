const Profesores = require("../models/profesoresModel");

module.exports = {
  listar: (req, res) =>
    Profesores.getAll((err, results) =>
      err ? res.status(500).json(err) : res.json(results)
    ),

  crear: (req, res) =>
    Profesores.create(req.body, (err, result) =>
      err ? res.status(500).json(err) : res.json({ id: result.insertId })
    ),

  eliminar: (req, res) =>
    Profesores.delete(req.params.id, (err) =>
      err ? res.status(500).json(err) : res.json({ message: "Profesor eliminado" })
    )
};