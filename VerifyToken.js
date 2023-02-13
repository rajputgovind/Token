import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken"

export function verifyToken(req,res,next){
    const authHeader =req.get('Authorization')
    if(authHeader){
        // const token = authHeader.replace('Bearer ',"")
        const token = authHeader.split(" ")[1];
        jwt.verify(token,'govind123',(error,payload)=>{
            if(error){
                res.status(StatusCodes.UNAUTHORIZED).json({message:"Access Denied"})
            }
            else{
                next();
            }
        })   
    }
    else{
        res.status(StatusCodes.UNAUTHORIZED).json({message:"Access Denied"})
    }
}