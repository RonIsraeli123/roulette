import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  languageType: 'hebrew',
};

export const languageSlice = createSlice({
  name: 'languageType',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.languageType = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
