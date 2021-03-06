const express = require("express");
const router = express.Router();
const controller = require('../controllers/doctorController')

router.post("/", controller.createDoctor) // rota que cria os médicos
router.get("/", controller.getAllDoctors) // rota que retorna/lista os médicos
router.get("/:id", controller.getDoctor)
router.put("/:id", controller.updateDoctor)
router.patch("/:id/favorite", controller.updateFavorite)
router.delete("/:id", controller.deleteDoctor)

module.exports = router;