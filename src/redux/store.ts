import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import dialogSlice from './dialogSlice';
export const store = configureStore({
  reducer: {
    users: userSlice,
    dialog: dialogSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
