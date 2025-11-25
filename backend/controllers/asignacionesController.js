const Asignaciones = require("../models/asignacionesModel");

module.exports = {
  asignarEstudiante: (req, res) =>
    Asignaciones.asignarMateriaEstudiante(req.body, (err) =>
      err ? res.status(500).json(err) : res.json({ message: "Materia asignada" })
    ),

  asignarProfesor: (req, res) =>
    Asignaciones.asignarMateriaProfesor(req.body, (err) =>
      err ? res.status(500).json(err) : res.json({ message: "Materia asignada" })
    ),

  materiasEstudiante: (req, res) =>
    Asignaciones.getMateriasEstudiante(req.params.id, (err, datos) =>
      err ? res.status(500).json(err) : res.json(datos)
    ),

  materiasProfesor: (req, res) =>
    Asignaciones.getMateriasProfesor(req.params.id, (err, datos) =>
      err ? res.status(500).json(err) : res.json(datos)
    )
};