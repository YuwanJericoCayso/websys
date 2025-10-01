const models = require('../../models');

async function getAllStudents(req, res) {
  const students = await models['students'].findAll();

  res.send(students);
}

async function getAllStudentsWithGraduateInfo(req, res) {
  const students = await models['students'].findAll({
    include: [
      {
        model: models['graduates'],
        include: models['programs'],
      },
    ],
  });

  res.send(students);
}

async function createStudent(req, res) {
  const student = await models['students'].create(req.body);
  res.send(student);
}

module.exports = {
  getAllStudents,
  getAllStudentsWithGraduateInfo,
  createStudent,
};