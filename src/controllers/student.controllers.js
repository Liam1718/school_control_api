import studentsDAOS from "../daos/student.daos.js";

const studentsControllers = {};

studentsControllers.getAll = (req, res) => {
    //Aquí se le pedirán los datos al DAO
    studentsDAOS.getAll()
        .then((students) => {
            res.render("index.ejs", { students });
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has occurred",
                error: err
            })
        });
    //Aquí vamos a responder al cliente

};

studentsControllers.getOne = (req, res) => {
    studentsDAOS.getOne(req.params.student_id)
        .then((student) => {
            if (student) {
                res.render("edit.ejs", { student });
            } else {
                res.status(404).json({
                    message: "Student not found"
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

studentsControllers.insertOne = (req, res) => {
    studentsDAOS.insertOne(req.body)
        .then((newStudent) => {
            res.redirect("/api/students/getAll");
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has occurred",
                error: err
            })
        });
};

studentsControllers.updateOne = (req, res) => {
    studentsDAOS.updateOne(req.params.student_id, req.body)
        .then((updatedStudent) => {
            if (updatedStudent) { //Si se encontró y actualizó el estudiante
                res.redirect("/api/students/getAll");
            } else { //de lo contrario, no existe
                res.status(404).json({
                    message: "Student not found"
                })
            }
        })
        .catch((err) => {
            res.status(500).json({ //Error del servidor
                message: "An error has occurred",
                error: err
            })
        });
};

studentsControllers.deleteOne = (req, res) => {
    studentsDAOS.deleteOne(req.params.student_id)
        .then((deletedStudent) => {
            if (deletedStudent) {
                res.redirect("/api/students/getAll");
            } else {
                res.status(404).json({
                    message: "Student not found"
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

export default studentsControllers;