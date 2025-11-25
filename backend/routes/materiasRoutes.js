const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/materiasController");

router.get("/", ctrl.listar);
router.post("/", ctrl.crear);
router.put("/:id", ctrl.editar);
router.delete("/:id", ctrl.eliminar);

module.exports = router;