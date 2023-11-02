import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./AppSlice"
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit"

const persistConfig={
    key:"root",
    version:1,
    storage
}
const reducer =combineReducers({
    products: productsReducer

})
const persistedReducer=persistReducer(persistConfig,reducer)
const Store = configureStore({
    reducer: persistedReducer
})
export default Store