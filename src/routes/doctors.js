const express = require("express");
const router = express.Router();
const contorller = require('../controllers/doctorController')

router.post('/', contorller.createDoctor);
router.get('/', contorller.getAllDoctors)

module.exports = router;