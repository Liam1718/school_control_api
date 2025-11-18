import teachersDAOS from "../DAOs/teacher.daos.js";

const teachersControllers = {};

teachersControllers.getAll = (req, res) => {
    teachersDAOS.getAll()
        .then((teachers) => {
            res.json({
                data: teachers
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has ocurred",
                error: err
            })
        });
};

teachersControllers.getOne = (req, res) => {
    teachersDAOS.getOne(req.params.teacher_id)
        .then((teacher) => {
            if (teacher) {
                res.json({
                    data: teacher
                })
            } else {
                res.status(404).json({
                    message: "Teacher not found"
                })
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has ocurred",
                error: err
            })
        })
};

teachersControllers.insertOne = (req, res) => {
    teachersDAOS.insertOne(req.body)
        .then((newTeacher) => {
            res.status(200).json({
                message: "Teacher created succesfully",
                data: newTeacher
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has ocurred",
                error: err
            })
        })
};

teachersControllers.updateOne = (req, res) => {
    teachersDAOS.updateOne(req.params.teacher_id, req.body)
        .then((updatedTeacher) => {
            if (updatedTeacher) {
                res.json({
                    message: "Teacher updated successfully",
                    data: updatedTeacher
                })
            } else {
                res.status(404).json({
                    message: "Teacher not found"
                })
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has ocurred",
                error: err
            })
        })
};

teachersControllers.deleteOne = (req, res) => {
    teachersDAOS.deleteOne(req.params.teacher_id)
        .then((deletedTeacher) => {
            if (deletedTeacher) {
                res.json({
                    message: "Teacher deleted successfully",
                    data: deletedTeacher
                })
            } else {
                res.status(404).json({
                    message: "Teacher not found"
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

export default teachersControllers;