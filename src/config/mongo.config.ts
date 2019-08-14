import mongoose from 'mongoose';


class MongoConfig{

    public connect(){
        mongoose.connect("mongodb://localhost:27017/parking_db")
    }
}

const mongoConfig = new MongoConfig();
export default mongoConfig;