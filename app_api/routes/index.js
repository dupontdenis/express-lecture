const express = require('express');
const router = express.Router();

const ctrlCourses = require('../controllers/courses');

const find = require('lodash.find');
const pullallby = require('lodash.pullallby');

router
    .route('/courses')
    .get(ctrlCourses.coursesReadAll)
    .post(ctrlCourses.coursesCreateOne);

router
    .route('/courses/:id')
    .get(ctrlCourses.coursesReadOne)
    .put(ctrlCourses.coursesUpdateOne)
    .delete(ctrlCourses.coursesDeleteOne);

module.exports = router;