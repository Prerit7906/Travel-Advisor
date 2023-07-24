import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
const initialState={
    items:[],
    number:0,
    type:'',
    autoComplete:'',
    distance:'5'
};
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        replaceCart(state,action){
            state.items=action.payload.items;
        },
        setType(state,action){
            state.type=action.payload;
        },
        onLoadAutoComplete(state,action){
            state.autoComplete=action.payload;
        },
        changeDistance(state,action){
            state.distance=action.payload;
        },
        changeNumber(state,action){
            state.number=action.payload;
        }
    }
});
const store=configureStore({reducer:{
    cart:cartSlice.reducer
}});
export const cartActions=cartSlice.actions;
export default store;