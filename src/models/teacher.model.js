import {model,Schema} from 'mongoose';

const teacherSchema = new Schema({
    teacher_id:{
        type: String,
        required: true,
        unique:true
    },
    name: String,
    lastname: String,
    age: Number,
    email: String,
    area: String, 
    salary: String,
    years_of_service: Number //años de servicio
},{
    timestamps: true,
    versionKey: false
});
export default model ('teacher', teacherSchema);