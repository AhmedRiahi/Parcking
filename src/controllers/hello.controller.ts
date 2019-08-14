import {Router, Request, Response, NextFunction} from 'express';

export class HelloController {

    router: Router;

    constructor(){
        this.router = Router();
    }

    public initRoutes(): void{
        this.router.get("/greeting",this.sayeHello);
    }

    sayeHello( req: any, res ):void{
        res.send("Hello Node (y) ");
    }
}

const helloController = new HelloController();
helloController.initRoutes();

export default helloController.router;