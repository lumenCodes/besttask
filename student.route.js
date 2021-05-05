const express = require('express');
const studentRouter = express.Router();
const studentController = require('./student.controller')



studentRouter.post('/', studentController.create)
studentRouter.get('/:id', studentController.getOne)
studentRouter.get('/', studentController.getAll)
studentRouter.patch('/:id', studentController.update)
studentRouter.delete('/:id', studentController.delete)

module.exports = studentRouter;