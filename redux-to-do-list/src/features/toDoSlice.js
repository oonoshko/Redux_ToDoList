import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};
export const toDoSlider = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const task = {
        id: Math.floor(Math.random() * 1000),
        text: action.payload,
        completed: false,
        important: false,
      };
      state.todoList.push(task);
    },

    removeTodo: (state, action) => {
      state.todoList.splice(action.payload.id, 1);
    },

    completeTodo: (state, action) => {
      const todo = state.todoList.find((el) => el.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    importantTodo: (state, action) => {
      const todo = state.todoList.find((el) => el.id === action.payload);
      if (todo) {
        todo.important = !todo.important;
      }

      state.todoList.sort((a, b) => b.important - a.important);
    },
  },
});

export const { addTodo, removeTodo, completeTodo, importantTodo } =
  toDoSlider.actions;

export default toDoSlider.reducer;
