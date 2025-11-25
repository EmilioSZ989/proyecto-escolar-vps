const Estudiantes = require("../models/estudiantesModel");

module.exports = {
  listar: (req, res) =>
    Estudiantes.getAll((err, results) =>
      err ? res.status(500).json(err) : res.json(results)
    ),

  crear: (req, res) =>
    Estudiantes.create(req.body, (err, result) =>
      err ? res.status(500).json(err) : res.json({ id: result.insertId })
    ),

  eliminar: (req, res) =>
    Estudiantes.delete(req.params.id, (err) =>
      err ? res.status(500).json(err) : res.json({ message: "Estudiante eliminado" })
    )
};