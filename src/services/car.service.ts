import {CarModel,ICar} from '../models/car.model';

export class CarService{

    public loadAll():Promise<Array<ICar>>{
        return CarModel.find({});
    }
}