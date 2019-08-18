import {CarService} from '../services/car.service';
import { Router } from 'express';
import { inject,injectable } from 'inversify';
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { ICar } from '../models/car.model';


@controller("/car")
export class CarController {


    private carService: CarService;

    constructor(carService: CarService){
        this.carService = carService;
    }

    @httpGet("/")
    public loadAll(): Promise<Array<ICar>>{
        return this.carService.loadAll();
    }
}