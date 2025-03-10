//mongodb+srv://guruprasadj2005:94kzeY4e@cluster0.z396t.mongodb.net/?

import mongoose from "mongoose";


export const connectDB = async ()  =>{
    await mongoose.connect('mongodb+srv://guruprasadj2005:94kzeY4e@cluster0.z396t.mongodb.net/food-del')
    .then(()=>console.log("DB Connected"))
    .catch((err)=>console.log(err));
}
