import "reflect-metadata";
import {
  interfaces,
  InversifyExpressServer,
  TYPE
} from "inversify-express-utils";
import express from "express";
import * as routes from "./config/routes.config";
import mongoConfig from "./config/mongo.config";
import DICOntainer from "./config/ioc.config";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";

const port = 8080;

class App {
  private server: InversifyExpressServer;

  constructor() {
    this.server = new InversifyExpressServer(DICOntainer);
  }

  public bootstrap(): void {
    mongoConfig.connect();
    this.server
      .setConfig(app => {
        app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        app.use(function(req, res, next) {
          res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
          res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
          );
          next();
        });
      })
      .build()
      .listen(port);
  }
}

new App().bootstrap();
