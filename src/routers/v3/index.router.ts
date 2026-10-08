import express from 'express';


const v3Router=express.Router();
/**
 * this is the main router for v2 API
 * it wqill contain all the routes for v2 API
 * @module routers/v2/index.router
 */
v3Router.get('/',(req, res) => {
    res.status(200).send('fine');
})

export default v3Router;