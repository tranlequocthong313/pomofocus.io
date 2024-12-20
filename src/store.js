import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './features/timerSlice';
import taskReducer from './features/taskSlice';
import settingSlice from './features/settingSlice';
import authSlice from './features/authSlice';

const store = configureStore({
  reducer: {
    timer: timerReducer,
    task: taskReducer,
    setting: settingSlice,
    auth: authSlice,
  },
});

export default store;
