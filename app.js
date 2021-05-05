const express = require('express');
const studentRouter = require('./student.route');
const app = express();

const studentRoutes = require('./student.route')


app.use(express.json())
app.use (express)
app.use('/students', studentRoutes)

module.exports = app