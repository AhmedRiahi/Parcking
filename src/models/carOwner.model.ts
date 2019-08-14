import mongoose,{Schema,Document} from 'mongoose';


export interface ICarOwner extends Document{
    fullName:String
}

export class CarOwnerSchema extends Schema {

    public static SCHEMA_NAME: string = "car_owner";

    constructor(){
        super({
            fullName:{type : String, required:true, unique:true}
        });
    }
}

export default mongoose.model<ICarOwner>(CarOwnerSchema.SCHEMA_NAME,new CarOwnerSchema());