// this file contain all the basic configuration logic for the app server to work
import dotenv from 'dotenv';// 6.8k (gzipped:3k)
type ServerConfig={
    PORT:number
}

function loadEnv(){
dotenv.config();
console.log("enviromnet variable loading");
}
loadEnv();

export const serverConfig:ServerConfig={
    PORT:Number(process.env.PORT)|| 3001

};