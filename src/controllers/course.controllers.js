import coursesDAOS from "../DAOs/course.daos.js";

const coursesControllers = {};

coursesControllers.getAll = (req, res) => {
    coursesDAOS.getAll()
        .then((courses) => {
            res.json({
                data: courses
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has ocurred",
                error: err
            })
        });
};

coursesControllers.getOne = (req, res) => {
    coursesDAOS.getOne(req.params.course_id)
        .then((course) => {
            if (course) {
                res.json({
                    data: course
                })
            } else {
                res.status(404).json({
                    message: "Course not found"
                })
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has occurred",
                error: err
            })
        })
};

coursesControllers.insertOne = (req, res) => {
    coursesDAOS.insertOne(req.body)
        .then((newCourse) => {
            res.status(200).json({
                message: "Course created successfully",
                data: newCourse
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has occurred",
                error: err
            })
        })
};

coursesControllers.updateOne = (req, res) => {
    coursesDAOS.updateOne(req.params.course_id, req.body)
        .then((updatedCourse) => {
            if (updatedCourse) {
                res.json({
                    message: "Course updated successfully",
                    data: updatedCourse
                })
            } else {
                res.status(404).json({
                    message: "Course not found"
                })
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has occurred",
                error: err
            })
        })
};

coursesControllers.deleteOne = (req, res) => {
    coursesDAOS.deleteOne(req.params.course_id)
        .then((deletedCourse) => {
            if (deletedCourse) {
                res.json({
                    message: "Course deleted successfully",
                    data: deletedCourse
                })
            } else {
                res.status(404).json({
                    message: "Course not found"
                })
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has occurred",
                error: err
            })
        });
};

export default coursesControllers;