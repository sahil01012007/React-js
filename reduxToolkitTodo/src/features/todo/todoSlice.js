import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Helloo"}]
}


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((eachTodo) => 
                eachTodo.id !== action.payload
            )
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((eachTodo) => 
                eachTodo.id === action.payload.id ? { ...eachTodo, text: action.payload.text } : eachTodo
            )
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer