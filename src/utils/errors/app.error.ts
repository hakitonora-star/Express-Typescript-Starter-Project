export interface AppError extends Error{
    statusCode:number;
}

export class IntetnalServerError implements AppError{
    statusCode: number;
    message: string;
    name: string;
    constructor(message:string){
        this.statusCode=500;
        this.message=message;
        this.name="IntetnalServerError";

    }

}
export class BadRequestError implements AppError{
    statusCode: number;
    message: string;
    name: string;
    constructor(message:string){
        this.statusCode=400;
        this.message=message;
        this.name="BadRequestError";

    }

}
export class NotFoundError implements AppError{
    statusCode: number;
    message: string;
    name: string;
    constructor(message:string){
        this.statusCode=404;
        this.message=message
        this.name="NotFoundError"

    }

}