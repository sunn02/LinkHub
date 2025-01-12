const express = require('express');
const router = express.Router();
const linksController = require('../controllers/linksController');

// Rutas para los links
router.get('/', linksController.getAllLinks);
router.get('/:id', linksController.getlink);
router.post('/', linksController.createlink);
router.put('/:id', linksController.updatelink);
router.delete('/:id', linksController.deletelink);


// Ruta para obtener enlaces por tagId
router.get('/tags/:tag', linksController.getLinksbyTag);

router.put('/vote/:id', linksController.votelink);

module.exports = router;