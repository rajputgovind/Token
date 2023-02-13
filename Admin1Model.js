import mongoose from "mongoose";

const adminSchema= new mongoose.Schema({
    name: {type:String, required:true},
    password:{type:String, required:true},
    email:{type:String,required:true},
    phone:{type:String, required:true}
})

export const AdminModel = new mongoose.model('Admin', adminSchema)

// module.exports = AdminModel