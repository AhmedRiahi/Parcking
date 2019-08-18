import 'reflect-metadata';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import express from 'express';
import * as routes from './config/routes.config';
import mongoConfig from './config/mongo.config';
import DICOntainer from './config/ioc.config';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

const port = 3000;


class App {

  private server: InversifyExpressServer;

  constructor(){
    this.server = new InversifyExpressServer(DICOntainer);
    
  }

  public bootstrap(): void{
    mongoConfig.connect();
    this.server.setConfig((app) => {
        app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }).build().listen(port);
  }
}

new App().bootstrap();