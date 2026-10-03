import express, { NextFunction,Request,Response }  from "express";
import { pingHandler } from "../../controllers/ping.controller";
import validateRequestBody from "../../validators";
import { pingSchema } from "../../validators/ping.validators";

// export function createPingRouter(app:Express){
//     app.get('/ping',pingHandler)

// }
const pingRouter=express.Router();
/*
function middleware1(req:Request,res:Response,next:NextFunction){
    console.log('Middleware 1');
    next();//call the next middleware
    }
function middleware2(req:Request,res:Response,next:NextFunction){
    console.log('Middleware 2');
    next();//call the next middleware
}
function middleware3(req:Request,res:Response,next:NextFunction){
    console.log('Middleware 3');
    next();//call the next middleware
}


pingRouter.get('/ping',middleware1,middleware2,middleware3,pingHandler);// middleware1------>middleware2------>pingHandler
*/
// pingRouter.get('/:user_id/comments',pingHandler);
//-->instead of checking manually ,that data coming from client is correcrt or not we use zod library in below code we check data is valid or not by manually
// function checkbody(req:express.Request,res:express.Response,next:express.NextFunction):void{
//     if(typeof req.body.name!="string"){
//         res.status(400);
//         res.send("Bad Request");
        
//     }
//     next();


// }
// pingRouter.get("/",checkbody,pingHandler);
pingRouter.get("/",validateRequestBody(pingSchema),pingHandler);

pingRouter.get('/health',(req,res)=>{
    res.status(200).send('OK');
})
export default pingRouter;

/**
 * z.object({
 * name:z.string(),
 * age:z.number().int().positive // means age is number and it should be int not in decimal and it should be positive
 * })
 */
