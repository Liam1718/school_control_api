import Teacher from "../models/teacher.model.js";

const teachersDAOS = {};

teachersDAOS.getAll = async () => {
    const teachers = await Teacher.find();
    return teachers;
};

teachersDAOS.getOne = async (teacher_id) => {
    const teachers = await Teacher.findOne({teacher_id: teacher_id});
    return teachers;
};

teachersDAOS.insertOne = async (teacherData) => {
    const newTeacher = new Teacher(teacherData);
    return await newTeacher.save();
};

teachersDAOS.updateOne = async (teacher_id, updateData) => {
    const updatedTeacher = await Teacher.findOneAndUpdate({teacher_id: teacher_id},
        updateData
    );
    return updatedTeacher;
};

teachersDAOS.deleteOne = async (teacher_id) => {
    const deletedTeacher = await Teacher.findOneAndDelete({teacher_id: teacher_id});
    return deletedTeacher;
};
export default teachersDAOS;