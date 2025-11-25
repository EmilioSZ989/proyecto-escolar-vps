const Materias = require("../models/materiasModel");

module.exports = {
  listar: (req, res) =>
    Materias.getAll((err, results) =>
      err ? res.status(500).json(err) : res.json(results)
    ),

  crear: (req, res) =>
    Materias.create(req.body, (err, result) =>
      err ? res.status(500).json(err) : res.json({ id: result.insertId })
    ),

  editar: (req, res) =>
    Materias.update(req.params.id, req.body, (err) =>
      err ? res.status(500).json(err) : res.json({ message: "Materia actualizada" })
    ),

  eliminar: (req, res) =>
    Materias.delete(req.params.id, (err) =>
      err ? res.status(500).json(err) : res.json({ message: "Materia eliminada" })
    )
};