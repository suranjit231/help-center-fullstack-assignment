import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    loadingCards: false,
    cards:[],
    error:null
}


//======= api call for get initial cards async thunk ==========//
export const getAllCardsApiAsync = createAsyncThunk("card/getAllCardsApi",
    async(arg, thunkApi)=>{
        try{
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/cards`);
            //console.log("res for api call get all cards: ", res.data);

            return res.data;

        }catch(error){
           return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
)

//======= api call for create new cards ===========//
export const createNewCardsApiAsync = createAsyncThunk("card/createNewCardsApi",
    async(arg, thunkApi)=>{
        try{
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/cards`, arg);
           // console.log("res for create new cards: ", res.data);
            return res.data;

        }catch(error){
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
);

//====== get searched cards by title api calls =============//
export const getOneCardsApiAsync = createAsyncThunk("card/getOneCardsApi", 
    async(text, thunkApi)=>{
        try{

            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/cards/${text}`);
          //  console.log("res for get one card: ", res.data);
            return [res.data.card];

        }catch(error){
            return thunkApi.rejectWithValue(error.response.data.message);
        }
    }
)



//======= create cards slice for managing in the state action =========//
const cardSlice = createSlice({
    name:"card",
    initialState:initialState,

    reducers:{
        resetError:(state, action)=>{
            state.error = null;
        }
    },

    extraReducers:(builders)=>{
        builders
        .addCase(createNewCardsApiAsync.pending, (state, action)=>{
            state.loadingCards = true;
        })
        .addCase(createNewCardsApiAsync.fulfilled, (state, action)=>{
            state.cards.push(action.payload.card);
            state.loadingCards = false;
            state.error = null;
        })
        .addCase(createNewCardsApiAsync.rejected, (state, action)=>{
            state.error = action.payload;
            state.loadingCards = false;
        })

        //====== update state on the basis of getAllCardsApi status =====//
        .addCase(getAllCardsApiAsync.pending, (state, action)=>{
            state.loadingCards = true;
        })
        .addCase(getAllCardsApiAsync.fulfilled, (state, action)=>{
            state.cards = [...action.payload.cards];
            state.loadingCards = false;
            state.error = null;
        })
        .addCase(getAllCardsApiAsync.rejected, (state, action)=>{
            state.error = action.payload;
            state.loadingCards = false;
        })

        //======= update state when searching for cards ======//
        .addCase(getOneCardsApiAsync.pending, (state, action)=>{
            state.loadingCards = true;
        })
        .addCase(getOneCardsApiAsync.fulfilled, (state, action)=>{
            //console.log("action.payload.card: ", action.payload)
            state.cards = [...action.payload];
            state.loadingCards = false;
            state.error = null;
        })
        .addCase(getOneCardsApiAsync.rejected, (state, action)=>{
            state.error = action.payload;
            state.loadingCards = false;
        })
    }
});

//======= creating reducers by using cardSlice =======//
export const cardReducer = cardSlice.reducer;
export const cardActions = cardSlice.actions;
export const cardSelector = (state)=>state.cardReducer;