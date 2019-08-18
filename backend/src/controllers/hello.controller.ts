import {Router, Request, Response, NextFunction} from 'express';
import { injectable } from 'inversify';
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";


@controller("/hello")
export class HelloController {

    router: Router;

    constructor(){
        this.router = Router();
    }

    public initRoutes(): void{
        this.router.get("/greeting",this.sayeHello);
    }

    @httpGet('/greeting')
    private sayeHello( ):String{
        return "Hello Node (y) ";
    }
}