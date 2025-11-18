import express from "express";
import morgan from "morgan";
import ejs from "ejs";
import studentsRouter from "./routes/student.routes.js";
import teachersRouter from "./routes/teacher.routes.js";
import coursesRouter from "./routes/course.routes.js";

//Variables
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set("views", "./src/views");

//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));

//Routes
app.use("/api/students", studentsRouter);
app.use("/api/teachers", teachersRouter);
app.use("/api/courses", coursesRouter); 

//Exporting
export default app;