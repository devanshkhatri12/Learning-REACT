import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id: 1, text: "My first redux toolkit"}]
}


// create slice ->  biggest version of reducer(functionality)
// defined name carefully when u alot name it show in redux toollkit]

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // reducer : it hold property and fn.
    // in redux toolkit we only declare we also define
    // state: give current state
    // action: jo bhi data pass ho rha h
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        // jo id match nhi kregi voh aajyegi sirf
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
