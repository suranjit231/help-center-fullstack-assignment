import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./helpCenterReducer";

const store = configureStore({
    reducer:{
        cardReducer,
    }
});

export default store;