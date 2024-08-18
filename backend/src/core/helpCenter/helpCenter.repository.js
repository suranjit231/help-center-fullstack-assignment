import mongoose from "mongoose";
import helpCenterModel from "./helpCenterSchema.js";
import { AppError } from "../../middleware/errorHandler.middleware.js";

//====== a repository class contains methods for communicate between database and controller ======//
export default class HelpCenterRepository{

    //====== create a new help center card ==========//
    async createHelpCenterCard(cardInfo){
       try{
            const newCard = new helpCenterModel(cardInfo);
            const savedCard = await newCard.save();

            return {success:true, message:"Card is created successfully.", card:savedCard};

       }catch(error){
            throw error;
       }

    }

    //====== get all gelp center card ==============//
    async getAllHelpCenterCard(){
        try{
            const cards = await helpCenterModel.find();

            if(cards.length<1){
              //  return {success:false, message:"No help center cards is available", cards:cards};
                throw new AppError("No help center cards is available", 404);

            }else{
                return {success:true, message:"Help center cards is fecthed.", cards:cards};
            }

        }catch(error){
            throw error;
        }
    }

    //===== get one cards by cards title ==========//
    async getOneCardsByTitle(searchText){
        try{

            // ====== creating a regex pattern by searching title ======//
            const query = {title:{ $regex:searchText, $options:'i'}};
            const card = await helpCenterModel.findOne(query);

            if(!card){
                //return {success:false, message:`No cards is found with ${searchText} name`, card:card};
                throw new AppError(`No cards is found with ${searchText} name`, 404);

            }else{

                return {success:true, message:"Card is found.", card:card};
            }

        }catch(error){
            throw error;
        }
    }
}