import { createSlice } from '@reduxjs/toolkit';

const ONE_SECOND = 1000;

const getInitialState = () => {
  const state = {};

  state.startAt = Date.now();

  state.main = {
    count: 1,
    minutes: 25,
  };
  state.main.time = new Date(
    state.startAt + state.main.minutes * 60000
  ).getTime();

  state.shortBreak = {
    count: 1,
    minutes: 5,
  };
  state.shortBreak.time = new Date(
    state.startAt + state.shortBreak.minutes * 60000
  ).getTime();

  state.longBreak = {
    time: new Date(state.startAt + 0.1 * 60000).getTime(),
    count: 1,
    minutes: 15,
  };
  state.longBreak.time = new Date(
    state.startAt + state.longBreak.minutes * 60000
  ).getTime();

  state.tab = 'main';
  state.isRunning = false;
  state.longBreakInterval = 4;
  state.autoStartMain = false;
  state.autoStartBreak = false;
  state.isFinishedMain = false;

  return state;
};

const resetState = (state) => {
  state.isRunning = false;
  state.main.time = timerSlice.getInitialState().main.time;
  state.shortBreak.time = timerSlice.getInitialState().shortBreak.time;
  state.longBreak.time = timerSlice.getInitialState().longBreak.time;
};

const finish = (state) => {
  state[state.tab].count += 1;
  state.isFinishedMain = state.tab === 'main';
  if (
    state.tab === 'main' &&
    state[state.tab].count > 0 &&
    state[state.tab].count % state.longBreakInterval === 0
  ) {
    state.tab = 'longBreak';
  } else if (state.tab === 'main') {
    state.tab = 'shortBreak';
  } else {
    state.tab = 'main';
  }
  resetState(state);
  if (state.autoStartMain && state.tab === 'main') {
    state.isRunning = true;
  } else if (state.autoStartBreak && state.tab !== 'main') {
    state.isRunning = true;
  }
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState: getInitialState(),
  reducers: {
    start: (state) => {
      state.isRunning = true;
    },
    pause: (state) => {
      state.isRunning = false;
    },
    skip: (state) => {
      finish(state);
    },
    changeTab: (state, action) => {
      state.tab = action.payload;
      resetState(state);
    },
    decrease: (state) => {
      state[state.tab].time -= ONE_SECOND;
      if (state[state.tab].time === state.startAt) {
        finish(state);
      }
    },
  },
});

export const { start, pause, skip, changeTab, decrease } = timerSlice.actions;

export default timerSlice.reducer;
