import mongoose, { Schema, Document } from "mongoose";
import { ICarOwner, CarOwnerSchema } from "./carOwner.model";

export interface ICar extends Document {
  serialNumber: string;
  owner: ICarOwner;
}

class CarSchema extends Schema {
  public static SCHEMA_NAME: string = "car";

  constructor() {
    super({
      serialNumber: { type: String, required: true, unique: true },
      owner: { type: Schema.Types.ObjectId, required: true }
    });
  }
}

const CarModel = mongoose.model<ICar>(CarSchema.SCHEMA_NAME, new CarSchema());

export { CarModel };
