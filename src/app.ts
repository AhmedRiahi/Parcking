import express from 'express';
import * as routes from './config/routes.config';
import mongoConfig from './config/mongo.config'

const port = 3000;


class App {

  public express: express.Application;

  constructor(){
    this.express = express();
    
  }

  private initRoutes() : void{
      routes.register(this.express);
  }

  public bootstrap(): void{
    this.initRoutes();
    mongoConfig.connect();
    this.express.listen(port, err => {
      if (err) {
        return console.error(err);
      }
      return console.log(`server is listening on ${port}`);
    });
  }
}

new App().bootstrap();