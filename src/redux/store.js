import { configureStore } from '@reduxjs/toolkit';

import gameDataSlice from './slices/gameSlice';
import languageSlice from './slices/languageSlice';

export const store = configureStore({
  reducer: {
    game: gameDataSlice,
    language: languageSlice,
  },
});
