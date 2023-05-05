import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Task1", completed: false },
  { id: 2, title: "Task2", completed: false },
];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    update(state, action) {
      const elementIndex = state.findIndex((el) => el.id === action.payload.id);
      state[elementIndex] = {
        ...state[elementIndex],
        ...action.payload,
      };
    },
    remove(state, action) {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});

const { actions, reducer: taskReducer } = taskSlice;
const { update, remove} = actions;

export function taskComplete(id) {
  return update({ id, completeTask: true });
}
export function titleChange(id) {
  return update({ id, title: `New title for ${id}` });
}
export function taskDelete(id) {
  return remove({ id });
}

export default taskReducer;