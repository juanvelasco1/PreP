import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../slices/charactersSlice';
import userReducer from '../slices/userSlice';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    user: userReducer,
  },
});

export default store;