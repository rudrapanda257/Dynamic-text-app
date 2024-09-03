import { createSlice } from '@reduxjs/toolkit';

const textBoxSlice = createSlice({
  name: 'textBoxes',
  initialState: [],
  reducers: {
    addTextBox: (state, action) => {
      state.push(action.payload);
    },
    updateTextBox: (state, action) => {
      const { id, changes } = action.payload;
      const index = state.findIndex((box) => box.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...changes };
      }
    },
    deleteTextBox: (state, action) => {
      return state.filter((box) => box.id !== action.payload);
    },
  },
});

export const { addTextBox, updateTextBox, deleteTextBox } = textBoxSlice.actions;
export default textBoxSlice.reducer;
