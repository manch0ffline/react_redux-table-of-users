import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { filterSlice } from '../features/filter';
import { usersSlice } from '../features/users';

const rootReducer = combineSlices(filterSlice, usersSlice);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
