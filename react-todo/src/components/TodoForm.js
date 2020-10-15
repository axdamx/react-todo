import React, { useEffect, useRef, useState } from "react";

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo-button"> {edit ? "Update" : "Add Todo"}</button>
      </form>
    </div>
  );
}

export default TodoForm;
