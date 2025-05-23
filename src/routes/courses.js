const express = require('express');
const app = express();
const router = express.Router();
const courseController = require('../app/controllers/CourseController.js');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.post('/handle-form-actions',courseController.handleFormActions);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDelete);
router.get('/:slug', courseController.show);


module.exports = router;
