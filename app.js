const express = require('express');
const studentRouter = require('./student.route');
const app = express();
require('./database')()
const studentRoutes = require('./student.route')


app.use(express.json())

app.use('/students', studentRoutes)

module.exports = app