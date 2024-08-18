import mongoose from "mongoose";

// ====== defining schema for per help center card ========//
const helpCenterSchema = mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    link:{
        type:String
    }

},{timestamp:true});

const helpCenterModel = mongoose.model("HelpCenter", helpCenterSchema);
export default helpCenterModel;



