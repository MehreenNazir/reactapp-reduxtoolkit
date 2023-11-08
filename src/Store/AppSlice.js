import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAllData: false,
    addCartData: [],
    cartData: [],
    searchProduct: '',
};
export const AppSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        handleDataToDisplay: (state) => {
            state.showAllData = !state.showAllData;
        },
        addtoCart: (state, action) => {
            state.addCartData = [...state.addCartData, action.payload];
        },
        deleteCart: (state, action) => {

            state.addCartData = state.addCartData.filter((item) => item.id !== action.payload)
        },
        deletAll: (state, action) => {
            state.addCartData = []
        },
        moveToAllCart: (state, action) => {
            state.addCartData = action.payload
        },
        searchData(state, action) {
            state.searchProduct = action.payload;
        },
    },
});
export const { handleDataToDisplay, deleteCart, addtoCart, deletAll, moveToAllCart, searchData } = AppSlice.actions;
export const selectShowAllData = (state) => state.products.showAllData;
export const selectCartData = (state) => state.products.cartData
export default AppSlice.reducer;
