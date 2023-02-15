const express = require("express");
const router = express.Router();
const tableControllers = require('../controllers/tableControllers')

router.post('/table', tableControllers.postTable)
router.get('/tables', tableControllers.getTable)
router.put('/table/:id', tableControllers.editTable)
router.get('/table/:id', tableControllers.tableDetails)
router.delete('/table', tableControllers.deleteTable)

module.exports = router;