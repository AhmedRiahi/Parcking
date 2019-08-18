import {CarModel,ICar} from '../models/car.model';
import { injectable, inject } from 'inversify';

@injectable()
export class CarService{

    public loadAll():Promise<Array<ICar>>{
        return CarModel.find({});
    }
}