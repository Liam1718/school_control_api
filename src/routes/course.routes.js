import { Router } from "express";
import coursesControllers from "../controllers/course.controllers.js";

const router = Router();

router.get("/getAll", coursesControllers.getAll);
router.get("/getOne/:course_id", coursesControllers.getOne);
router.post("/insertOne", coursesControllers.insertOne);
router.put("/updateOne/:course_id", coursesControllers.updateOne);
router.delete("/deleteOne/:course_id", coursesControllers.deleteOne);

export default router;