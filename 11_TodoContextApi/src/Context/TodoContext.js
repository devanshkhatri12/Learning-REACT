import React from "react";
import { createContext, useContext } from "react";

// context api is not for big functionality or state management
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "message",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider