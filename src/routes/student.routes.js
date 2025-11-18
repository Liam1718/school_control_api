import { Router } from "express";
import studentsControllers from "../controllers/student.controllers.js";

const router =  Router();

//Todo lo demás va en los controladores
router.get("/getAll", studentsControllers.getAll); 
router.get("/getOne/:student_id", studentsControllers.getOne);
router.post("/insertOne", studentsControllers.insertOne);
router.post("/updateOne/:student_id", studentsControllers.updateOne);
router.get("/deleteOne/:student_id", studentsControllers.deleteOne);

export default router;