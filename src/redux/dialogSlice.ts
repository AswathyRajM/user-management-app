// Part 1
import { createSlice } from '@reduxjs/toolkit';
import { initialStateDialogInterface } from './types';

const initialState: initialStateDialogInterface = {
  isOpen: false,
};

export const dialogSlice = createSlice({
  name: 'dialogSlice',
  initialState,
  reducers: {
    setDialougOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setDialougOpen } = dialogSlice.actions;
export default dialogSlice.reducer;
