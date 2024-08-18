import express from "express";
import HelpCenterController from "./helpCenter.controller.js";


const helpCenterRouter = express.Router();
const helpCenterController = new HelpCenterController();

//====== route for creating new cards =========//
helpCenterRouter.post("/", (req, res, next)=>{
    helpCenterController.createNewHelpCenterCard(req, res, next);
});

//===== get all help center cards route =======//
helpCenterRouter.get("/", (req, res, next)=>{
    helpCenterController.getAllHelpCenterCards(req, res, next);
});


//===== get one cards by search route =========//
helpCenterRouter.get("/:title", (req, res, next)=>{
    helpCenterController.getOneCardBySearch(req, res, next);
});


export default helpCenterRouter;