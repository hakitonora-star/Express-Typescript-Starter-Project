import { NextFunction, Request,Response } from "express"
import { success } from "zod"
import fs from "fs/promises";
import { AppError, NotFoundError } from "../utils/errors/app.error";
import logger from "../config/logger.config";

// express automaticaly injects one extra middleware after complete middleware chain which is default error middleware
/*

export const pingHandler=async(req:Request,res:Response,next:NextFunction): Promise<void>=>{
    // console.log("request body",req.body); // it means whatever data we send when request through json 
    // console.log("query params",req.query);
    // console.log("url params",req.params);
    // res.send('pong🙊')
    // it it good to response in json way instead direct message like we do in upper res.send pong because it is good to frontednd developer to read or any other develeoper to read what we sent
       /*
       it is not required after version 5 or more than version 5 example after version 5 it automaticalliy calls and error midddle ware if any error throw
       try {
            await fs.readFile("sample");
            res.status(200).json({message:"pong"})
        } catch (error) {
          next(error);// its caliing default express middleware which is genric error middleware is 
        }
        await fs.readFile("sample");
            res.status(200).json({message:"pong"});
 
    // res.status(200).json({
    //     message:'pong',
    //     success:true,
    // });

}
    

export const pingHandler=async(req:Request,res:Response,next:NextFunction): Promise<void>=>{
    try {
          await fs.readFile("sample");
            res.status(200).json({message:"pong"});
        
    } catch (error) { 
           throw new NotFoundError("File not Found");// its call error middleware funtion
    }
}


*/
export const pingHandler=(req:Request,res:Response,next:NextFunction): void=>{
     logger.info("Ping request received", {
    correlationId: req.headers["x-correlation-id"]
});
    res.status(200).json({message:"Pong!"});
}
