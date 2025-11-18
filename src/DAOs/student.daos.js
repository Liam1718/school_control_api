import Student from "../models/student.model.js";

const studentsDAOS = {};

studentsDAOS.getAll = async () => {
    //Aquí se hace la petición al modelo de mongoose para traer los estudiantes de mi cluster
    const students = await Student.find();
    return students;
};

studentsDAOS.getOne = async (student_id) => {
    const students = await Student.findOne({student_id: student_id});
    return students;
};

studentsDAOS.insertOne = async (studentData) => {
    const newStudent = new Student(studentData);
    return await newStudent.save();
};

studentsDAOS.updateOne = async (student_id, updateData) => {
    const updatedStudent = await Student.findOneAndUpdate(
        {student_id: student_id},
        updateData
    );
    return updatedStudent;
};

studentsDAOS.deleteOne = async (student_id) => {
    const deletedStudent = await Student.findOneAndDelete({student_id: student_id});
    return deletedStudent;
};

export default studentsDAOS;