import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  name: '',
  email: '',
  phone: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateUsername: (state, action: PayloadAction<string>) => {
      return { ...state, userName: action.payload.trim() };
    },
    updateName: (state, action: PayloadAction<string>) => {
      return { ...state, name: action.payload.trim() };
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      return { ...state, email: action.payload.trim() };
    },
    updatePhone: (state, action: PayloadAction<string>) => {
      return { ...state, phone: action.payload.trim() };
    },
    clearFields: () => {
      return initialState;
    },
  },
});
