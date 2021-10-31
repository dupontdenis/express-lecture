const find = require('lodash.find');
const pullallby = require('lodash.pullallby');
const {courses} = require('../models/courses')

const coursesReadAll = (req, res) => {
    res.render('index', { courses: courses });
};
const coursesCreateOne = (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    }
    courses.push(course);
    res.json(course);
}
const  coursesReadOne = (req, res) => {
    let course = find(courses, { 'id': Number(req.params.id) });
    if (!course) res.status(404).send(`The course with id:${req.params.id} was not found`)
    res.send(course);
}
const coursesUpdateOne = (req, res) => {
    let course = find(courses, { 'id': Number(req.params.id) });
    if (!course) res.status(404).send('the course with id:${req.params.id} was not found');
    course.name = req.body.name;
    res.json(course);
}
const coursesDeleteOne = (req, res) => {
    pullallby(courses, [{ 'id': Number(req.params.id) }], 'id');
    res.json(courses);
}
module.exports = {
    coursesReadAll,
    coursesCreateOne,
    coursesReadOne,
    coursesUpdateOne,
    coursesDeleteOne
  };