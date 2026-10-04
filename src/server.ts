import express from 'express';
import {serverConfig} from './config';
import { pingHandler } from './controllers/ping.controller';
import pingRouter from './routers/v1/ping..routers';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router';
import { z } from 'zod';
const app=express();
app.use(express.json()); // for JSON
// app.use(express.text()); // for plain text
// app.get('/ping',pingHandler);// we make a seprate file for this function it is like routing layer
// createPingRouter(app); we dont want to pass app means express agin and again 

/**
 * Registering all the routers and their corresponding routes without app server object
 */
// app.use('/ping',pingRouter); // whenever /ping request comes we rout or call ping router
app.use(`/api/v1`,v1Router);
app.use(`/api/v2`,v2Router)

console.log(`Environment variables loaded`)
app.listen(serverConfig.PORT,()=>{
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    console.log(`press Ctrl+C to stop the server !`);
    //we are access the environment variable in node js code using node js global
    // console.log(process.env.SERVER_NAME)
    // const obj={
    //     name:"sanket",
    //     age:27
    // } // object that i want  to test
    // const objSchema=z.object({
    //     name:z.string(),
    //     age:z.number().int().positive()
    //  })
    //  console.log(objSchema.parse(obj));
});