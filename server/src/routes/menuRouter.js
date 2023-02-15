const express = require("express");
const router = express.Router();
const menuControllers =require('../controllers/menuControllers')


router.post('/menu',menuControllers.postMenu)
router.get('/menus',menuControllers.getMenu)
router.put('/menus/:id', menuControllers.editMenu)
router.get('/menus/:id', menuControllers.menuDetails)
router.delete('/menu', menuControllers.deleteMenu)

module.exports = router;