import { AdminModel } from '../models/Admin1Model.js'
import express from 'express'
import { StatusCodes } from 'http-status-codes'
import bcrypt from 'bcrypt'
import  jwt  from 'jsonwebtoken'
export async function saveAdmin(req,res){
    try {
        const encryptedPassword = bcrypt.hashSync(req.body.password,12)
        req.body['password']= encryptedPassword
        const admin = new AdminModel(req.body)
        const savedAdmin = await admin.save()
        res.status(StatusCodes.CREATED).json(savedAdmin)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in saving data"})
    }
}

export async function login(req,res){
    try {
            const admin = await AdminModel.findOne({phone:req.body.phone})
            // console.log(admin.name)
            if(admin){
                if(bcrypt.compareSync(req.body.password,admin.password)){
                    const token = jwt.sign({adminId:admin._id},'govind123')
                    res.status(StatusCodes.OK).json({token:token})
                }
                else{
                    res.status(StatusCodes.BAD_REQUEST).json({message:"Invalid password"})
                }
            }
            else{
                res.status(StatusCodes.BAD_REQUEST).json({message:"phone not found"})
            }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in login"})
    }
}

export async function findAllAdmin(req,res){
    try {
        const admin = await AdminModel.find()
        res.status(StatusCodes.OK).json(admin)
        
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in finding data"})
    }
}