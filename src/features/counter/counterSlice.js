import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    main: '25:00',
    shortBreak: '5:00',
    longBreak: '15:00',
    tab: 'main',
    isRunning: false,
  },
  reducers: {
    start: (state) => {
      state.isRunning = true;
    },
    pause: (state) => {
      state.isRunning = false;
    },
    skip: (state) => {
      state.isRunning = false;
    },
    changeTab: (state, action) => {
      state.tab = action.payload;
      state.isRunning = false;
      state.main = counterSlice.getInitialState().main;
      state.shortBreak = counterSlice.getInitialState().shortBreak;
      state.longBreak = counterSlice.getInitialState().longBreak;
    },
  },
});

export const { start, pause, skip, changeTab } = counterSlice.actions;

export default counterSlice.reducer;
