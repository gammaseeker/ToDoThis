import React, { useState } from "react";

import TodoForm from "./TodoForm";
import "./NewTodo.css";

const NewTodo = (props) => {
    const saveTodoDataHandler = (enteredTodoData) => {
        const todoDate = {
            ...enteredTodoData,
            id: Math.random().toString()
        }
    
    }

    return (
        <div>
            <TodoForm onSaveTodoData={saveTodoDataHandler} />
        </div>
    )
}