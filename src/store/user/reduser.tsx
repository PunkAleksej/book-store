import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Todo = {
  key: number;
  text: string;
  id: number;
  active: boolean;
}

export type FilterTypes = 'ALL' | 'COMPLETE' | 'ACTIVE';

export type TodosState = {
  todos: Todo[];
  filter: FilterTypes;
}


const initialState: TodosState = {
  todos: [],
  filter: 'ALL',
}


let id = 1;
const createTodoTask = (text: string): Todo => {
  return {
    key: Math.floor(Math.random() * (1000000 - 1) + 1),
    text,
    id: id++,
    active: true
  }
}

const todoReducer = createSlice({
  name: "todoReducer",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.todos.push(createTodoTask(action.payload))
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(i => i.key !== action.payload)
    },
    completeTask: (state, action: PayloadAction<number>) => {
      const elem = state.todos.find(i => i.key === action.payload);
      if (elem) {
        elem.active = !elem.active
      }
    },
    filterPriority: (state, action: PayloadAction<FilterTypes>) => {
      state.filter = action.payload
    },
  }
})


const { actions, reducer } = todoReducer;


export const {
  addTask,
  deleteTask,
  completeTask,
  filterPriority
} = actions;

export default reducer;