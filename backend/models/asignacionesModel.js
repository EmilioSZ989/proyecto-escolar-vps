const db = require("./db");

const Asignaciones = {
  asignarMateriaEstudiante: (data, callback) =>
    db.query("INSERT INTO estudiante_materia SET ?", data, callback),

  asignarMateriaProfesor: (data, callback) =>
    db.query("INSERT INTO profesor_materia SET ?", data, callback),

  getMateriasEstudiante: (id, callback) => {
    const sql = `
      SELECT m.nombre 
      FROM materias m
      JOIN estudiante_materia em ON em.materia_id = m.id
      WHERE em.estudiante_id = ?
    `;
    db.query(sql, [id], callback);
  },

  getMateriasProfesor: (id, callback) => {
    const sql = `
      SELECT m.nombre 
      FROM materias m
      JOIN profesor_materia pm ON pm.materia_id = m.id
      WHERE pm.profesor_id = ?
    `;
    db.query(sql, [id], callback);
  }
};

module.exports = Asignaciones;