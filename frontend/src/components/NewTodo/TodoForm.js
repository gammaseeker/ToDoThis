import React, { useState } from "react";

import "./TodoForm.css";

const TodoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
  };

  const descChangeHandler = (event) => {
      setEnteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const todoData = {
        title: enteredTitle,
        description: enteredDescription
    };

    props.onSaveTodoData(todoData);
    setEnteredTitle("");
    setEnteredDescription("");
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Description</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={descChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Create Todo</button>
      </div>
    </form>
  );
};

export default TodoForm;