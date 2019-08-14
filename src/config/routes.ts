import * as express from "express";
import * as controllers from "../controllers/";

export const register = ( app: express.Application ) => {

    app.get( "/", ( req: any, res ) => controllers.helloController.sayeHello(req,res));
};