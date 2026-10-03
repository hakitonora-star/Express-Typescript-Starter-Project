import { Request,Response } from "express"

export const pingHandler=(req:Request,res:Response):void=>{
    // console.log("request body",req.body); // it means whatever data we send when request through json 
    // console.log("query params",req.query);
    // console.log("url params",req.params);
    res.send('pong🙊')

}
