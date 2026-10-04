import { NextFunction, Request,Response } from "express"
import { success } from "zod"
import fs from "fs";
// express automaticaly injects one extra middleware after complete middleware chain which is default error middleware
export const pingHandler=(req:Request,res:Response,next:NextFunction):void=>{
    // console.log("request body",req.body); // it means whatever data we send when request through json 
    // console.log("query params",req.query);
    // console.log("url params",req.params);
    // res.send('pong🙊')
    // it it good to response in json way instead direct message like we do in upper res.send pong because it is good to frontednd developer to read or any other develeoper to read what we sent
        fs.readFile("sample",(err,data)=>{
            if(err){
             next(err) //pass the error to the next middleware which is the default error handler
            }
            console.log(data.toString());
        })

    // res.status(200).json({
    //     message:'pong',
    //     success:true,
    // });

}

