const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/asignacionesController");

router.post("/estudiante", ctrl.asignarEstudiante);
router.post("/profesor", ctrl.asignarProfesor);

router.get("/estudiante/:id", ctrl.materiasEstudiante);
router.get("/profesor/:id", ctrl.materiasProfesor);

module.exports = router;