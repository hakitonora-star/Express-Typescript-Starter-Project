import { NextFunction } from "express";
import { success } from "zod";
import { AppError } from "../utils/errors/app.error";
import { error } from "console";

export const genericErrorHandler=(err:AppError,req:any,res:any,next:NextFunction)=>{
    console.log(err) // err is what we throw in ping controller
    res.status(err.statusCode).json({
        success:false,
        message:err.message,
    });  
}