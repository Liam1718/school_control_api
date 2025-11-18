import {model,Schema} from 'mongoose';

const courseSchema = new Schema({
    course_id:{
        type: String,
        required: true,
        unique:true
    },
    name: String,
    units: Number,
    credits: Number,
    semester: Number,
    hours_per_week: Number
},{
    timestamps: true,
    versionKey: false
});
export default model ('course', courseSchema);