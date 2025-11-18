import mongoose from "mongoose";

mongoose.connect("mongodb+srv://KiEL:VanNoe1817@kiel.2fx0kod.mongodb.net/school_control?retryWrites=true&w=majority&appName=Kiel")
    .then(()=>console.log("MongoDB is connected"))
    .catch((err)=>console.log(err));

export default mongoose; //Es para que los demas archivos puedan usar la conexion a la base de datos