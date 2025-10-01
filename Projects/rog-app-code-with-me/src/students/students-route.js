const express = require('express');
const router = express.Router();
const controller = require('./students-controller');

router.get('/', controller.getAllStudents);
router.get('/v2', controller.getAllStudentsWithGraduateInfo);
router.post('/v3', controller.createStudent);

module.exports = router;