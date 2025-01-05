const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController')

router.post('/:linkId', commentsController.createComment);
router.get('/:linkId', commentsController.getCommentsbyLink);


module.exports = router;
