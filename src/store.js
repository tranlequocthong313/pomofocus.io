import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './features/timerSlice';
import taskReducer from './features/taskSlice';
import settingSlice from './features/settingSlice';

const store = configureStore({
  reducer: {
    timer: timerReducer,
    task: taskReducer,
    setting: settingSlice,
  },
});

export default store;
