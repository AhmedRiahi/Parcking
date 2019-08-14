import * as express from "express";
import HelloController from "../controllers/hello.controller";
import CarController from "../controllers/car.controller";

export const register = ( app: express.Application ) => {

    app.use( "/hello", HelloController);
    app.use( "/car", CarController);
};