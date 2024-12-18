import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './features/timerSlice';
import taskReducer from './features/taskSlice';

const store = configureStore({
  reducer: {
    timer: timerReducer,
    task: taskReducer,
  },
});

export default store;
