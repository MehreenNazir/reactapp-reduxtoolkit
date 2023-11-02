import storage from 'redux-persist-localstorage'; 
import { persistReducer } from 'redux-persist';
import productsReducer from './AppSlice';

const persistConfig = {
  key: 'root',
  storage, 

  whitelist: ['products'], 
};

export const persistedReducer = persistReducer(persistConfig, productsReducer);
