import HelpCenterRepository from "./helpCenter.repository.js";
import { AppError } from "../../middleware/errorHandler.middleware.js";


//====== a class contains methods for communicate between card repo and card router ======//
export default class HelpCenterController{

    constructor(){
        this.helpCenterRepository = new HelpCenterRepository();
    }


    //====== create new card controller methods =======//
    async createNewHelpCenterCard(req, res, next){
        const {title, description , link} = req.body;
        try{

            //===== validate is title or desc is empty ======//
            let errors = [];
            if(!title){
                errors.push("Help center title is requird");
            }
    
            if(!description){
                errors.push("Help center description is requird");
            }
    
            if(errors.length>0){
               // throw new Error(errors[0]);
                throw new AppError(errors[0])
            }

            const result = await this.helpCenterRepository.createHelpCenterCard({title, description, link});
            if(result){
                return res.status(201).json(result);
            }


        }catch(error){
            next(error);
        }
    }


    //======== get all help center cards ===============//
    async getAllHelpCenterCards(req, res, next){
        try{
            const result = await this.helpCenterRepository.getAllHelpCenterCard();
            if(result){
                return res.status(200).json(result);
            }

        }catch(error){
            next(error);
        }
    }

    //======== get one cards searching by title ==========//
    async getOneCardBySearch(req, res, next){
        try{
            const title = req.params.title;
            const result = await this.helpCenterRepository.getOneCardsByTitle(title);
            if(result?.success){
                return res.status(200).json(result);

            }

        }catch(error){
            next(error);
        }
    }

}