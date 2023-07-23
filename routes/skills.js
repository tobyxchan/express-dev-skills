var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills');

// All actual paths start with "/todos"

// GET /skills
router.get('/', skillsController.index);
// GET /skills/new <- Define BEFORE show route
router.get('/new', skillsController.new);
// GET /skills/:id
router.get('/:id', skillsController.show);
// GET /skills/:id/edit
router.get('/:id/edit', skillsController.edit);
// POST /skills
router.post('/', skillsController.create);
// DELETE /skills/:id
router.delete('/:id', skillsController.delete);
// PUT /skills/:id
router.put('/:id', skillsController.update);


module.exports = router;
