const {Student} = require('./student')

class studentController{
create = async (req, res) => {    
    try {
        let student = new Student(req.body)
        await student.save()

        res.status(200).send({
            success: true,
            message: 'New student registered',
            data: student
        });
    } catch (error) {
        return res.status(404).send({
            success: false,
            message: error.message,
            deatil: error
        });
    } 
};
getOne = async (req, res) => {
    const student = await  Student.findById(req.params.id)
    if (!student){
        return res.status(404).send({
            success: false,
            message: 'student not found'
        })

    };
    return res.status(200).send({
        success: true,
        message: 'student found',
        data: student
    })

};
getAll = async (req, res) => {
    const students = await  Student.find()
    if (!students){
        return res.status(404).send({
            success: false,
            message: 'student not found'
        })

    };
    return res.status(200).send({
        success: true,
        message: 'student found',
        data: students
    })

};
update = async (req, res) => {
    const student = await Student.findById(req.params.id)
    
    student.name = req.body.name;
    student.department = req.body.department ? req.body.department : student.department;
    student.level = req.body.level ? req.body.level : student.level;

    await student.save()
    res.status(200).send({
        success: true,
        message: 'student update',
        data: student
    });
};
delete = async (req, res) => {
    const student = await Student.findByIdAndRemove(req.params.id)
    await student.delete()
    res.status(201).send({
        success: true,
        message: ' Student deleted succesfully',
        data: student
    });
};
};


module.exports = new studentController()