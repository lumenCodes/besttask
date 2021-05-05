const mongoose = require('mongoose');



const studentSchema = new mongoose.Schema({
    name: String,
    department: String,
    level: Number
});

const Student = mongoose.model('Student', studentSchema)

module.exports = {studentSchema, Student}

// exports.Student = mongoose.model('Student', studentSchema);