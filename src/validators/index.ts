import { Request, Response, NextFunction } from "express";
import { z } from "zod";


const validateRequestBody = (schema: z.ZodType) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.body);

            console.log("Request Body is valid");

            next();
        } catch (error) {
            return res.status(400).json({
                message: "Invalid request body",
                error: error
            });
        }
    };
};
export const validateQueryParams=(schema:z.ZodType)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
           try {
            await schema.parseAsync(req.body);

            console.log("Query param is valid");

            next();
        } catch (error) {
            return res.status(400).json({
                message: "Invalid quesry  param",
                error: error
            });
        }

    }
}

export default validateRequestBody;