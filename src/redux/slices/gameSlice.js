import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameData: {
    numPlayer: 2,
    numBalls: 3,
    playerBallsResult: [],
  },
};

export const gameDataSlice = createSlice({
  name: 'userAppointmentInfo',
  initialState,
  reducers: {
    setNumPlayer: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.gameData['numPlayer'] = action.payload;
    },
    setNumBalls: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.gameData['numBalls'] = action.payload;
    },
    setPlayerBallsResult: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.gameData['playerBallsResult'] = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNumPlayer, setNumBalls, setPlayerBallsResult } =
  gameDataSlice.actions;

export default gameDataSlice.reducer;
