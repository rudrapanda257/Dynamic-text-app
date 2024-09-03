import { configureStore } from '@reduxjs/toolkit';
import textBoxReducer from '../features/textBoxSlice';

export const store = configureStore({
  reducer: {
    textBoxes: textBoxReducer,
  },
});
