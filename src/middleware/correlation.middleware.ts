import { NextFunction, Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
import { asyncLocalStorage } from "../utils/helpers/request.helpers";

export const AttachCorrelationIdMiddleware = (req: Request,res: Response,next: NextFunction) => {

    // Generate a unique correlation ID
//     const correlationId = uuidV4();
//  // req.correlationId=coorelationID; // it not type so we write below
//     // Attach the correlation ID to the response header
//     req.headers["X-Correlation-ID"]= correlationId;

//     next();
// };
const correlationId = uuidV4();

req.headers["x-correlation-id"] = correlationId;
// Call the next middleware or route handler

asyncLocalStorage.run({correlationId:correlationId},()=>{
    next();

})


};