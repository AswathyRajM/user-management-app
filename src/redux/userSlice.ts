// Part 1
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userInterface, initialStateInterface } from './types';

const initialState: initialStateInterface = {
  userList: [],
  allUser: [],
  error: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    userRegister: (state, action: PayloadAction<userInterface>) => {
      state.allUser = [...state.allUser, action.payload];
      state.userList = [...state.allUser];
    },
    searchUser: (state, action: PayloadAction<string>) => {
      state.userList = state.userList.filter((user: userInterface) => {
        let searchTerm = `/${action.payload}/i`;
        return user.name.search(searchTerm);
      });
    },
    clearSearch: (state) => {
      state.userList = [...state.allUser];
    },
  },
});

export const { userRegister, searchUser, clearSearch } = userSlice.actions;
export default userSlice.reducer;
