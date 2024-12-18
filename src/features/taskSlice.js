import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
  const state = {};
  state.tasks = [];
  state.selectedTask = null;
  return state;
};

export const taskSlice = createSlice({
  name: 'task',
  initialState: getInitialState(),
  reducers: {
    save: (state, action) => {
      state.tasks.push({
        id: Math.random(),
        done: false,
        finishedCount: 0,
        ...action.payload,
      });
      if (!state.selectedTask) {
        state.selectedTask = state.tasks[0];
      }
    },
    select: (state, action) => {
      state.selectedTask = action.payload;
    },
    check: (state, action) => {
      const { id } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task.done) {
        state.tasks = state.tasks.map((task) => {
          if (task.id === id) {
            task.done = !task.done;
          }
          return task;
        });
      } else {
        task.done = true;
        state.tasks = state.tasks.filter((task) => task.id !== id);
        state.tasks.push(task);
        state.selectedTask = state.tasks[0];
      }
    },
    doOne: (state) => {
      if (!state.selectedTask) {
        return;
      }
      state.selectedTask.finishedCount += 1;
      state.tasks = state.tasks.map((task) => {
        if (task.id === state.selectedTask.id) {
          task.finishedCount += 1;
        }
        return task;
      });
    },
    deleteOne: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    update: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    },
  },
});

export const { save, select, check, doOne, deleteOne, update } =
  taskSlice.actions;

export default taskSlice.reducer;
