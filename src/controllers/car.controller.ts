
import {ICar} from '../models/car.model';
import {CarService} from '../services/car.service';
import { Router } from 'express';

export class CarController{

    router: Router;

    private carService: CarService;

    constructor(){
        this.router = Router();
        this.carService = new CarService();
    }

    public initRoutes(){
        this.router.get("/loadAll",this.loadAll.bind(this));
    }

    public loadAll(req: any, res):void{
        this.carService.loadAll().then((cars) => {
            res.send(cars)
        });
    }
}

const carController = new CarController();
carController.initRoutes();

export default carController.router;