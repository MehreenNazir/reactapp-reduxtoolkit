import { createSlice } from "@reduxjs/toolkit";
import produce from "immer"; // Import the 'produce' function

const initialState = {
    showAllData: false,
    favourates: [],
    countFavourate: 0,
    cartData: [],
};


export const AppSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        handleDataToDisplay: (state) => {
            state.showAllData = !state.showAllData;
        },
        addtofavourate: (state, action) => {
            state.favourates.push(action.payload);
        },
        removeTofavourate: (state, action) => {
            state.favourates.push(action.payload);
            state.countFavourate++;
        },
        addAllProductsToCart: (state, action) => {
            produce(state, (draft) => {
                draft.cartData = [...draft.cartData, ...action.payload];
            });
        },
    },
});

export const { handleDataToDisplay, addtofavourate, removeTofavourate, addAllProductsToCart } = AppSlice.actions;
export const selectShowAllData = (state) => state.products.showAllData;
export const selectCartData =(state) => state.products.cartData
export default AppSlice.reducer;
