import mongoose from "mongoose";


//======= connect mongodb database ===============//
const connectMongodb = async()=>{
    try{

        await mongoose.connect("mongodb://localhost:27017/helpCenter");
        console.log("mongodb is connected sucessfully.");

    }catch(error){
        console.log("falids to connect mongodb.")
    }
}

export default connectMongodb;