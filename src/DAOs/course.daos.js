import Course from "../models/course.model.js";

const coursesDAOS = {};

coursesDAOS.getAll = async () => {
    const courses = await Course.find();
    return courses;
};

coursesDAOS.getOne = async (course_id) => {
    const courses = await Course.findOne({course_id: course_id});
    return courses;
};

coursesDAOS.insertOne = async (courseData) => {
    const newCourse = new Course(courseData);
    return await newCourse.save();
};

coursesDAOS.updateOne = async (course_id, updateData) => {
    const updatedCourse = await Course.findOneAndUpdate(
        {course_id: course_id},
        updateData
    );
    return updatedCourse;
};

coursesDAOS.deleteOne = async (course_id) => {
    const deletedCourse = await Course.findOneAndDelete({course_id: course_id});
    return deletedCourse;
};

export default coursesDAOS;