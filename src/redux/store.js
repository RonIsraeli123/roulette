import { configureStore } from '@reduxjs/toolkit';
import gameDataSlice from './slices/gameSlice';

export const store = configureStore({
  reducer: {
    game: gameDataSlice,
  },
});
