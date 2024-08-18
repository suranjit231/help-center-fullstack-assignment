import dotenv from "dotenv";
dotenv.config();

import express, { urlencoded } from "express";
import connectMongodb from "./src/config/connectMongodb.js";
import cors from "cors";
import helpCenterRouter from "./src/core/helpCenter/helpCenter.route.js";
import { errorHandler } from "./src/middleware/errorHandler.middleware.js";




//======== create the server by invocking express ============//
const app = express();

// ====== parse req body in json formate ===============//
app.use(express.json());
app.use(urlencoded({extended:true}));


//============ setup cors ==============//
app.use(cors());


//========= handle routing for helpCenterRoute that starts with /api/cards =======//
app.use("/api/cards", helpCenterRouter);


// ====== listen for default request in root route ====//
app.get("/", (req, res, next)=>{
    res.status(200).send("Welcome to help our center.");
    
});


//====== setup middleware for handling all types of erros =====//
app.use(errorHandler);



//======= define port and listen for port ========//
const port = process.env.PORT || 3200;
app.listen(port, ()=>{
    console.log(`Server is listening on port:${port}`);
    connectMongodb();
})
