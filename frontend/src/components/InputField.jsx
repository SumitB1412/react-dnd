import React, { useRef } from "react";
import "./styles.css";

const InputField = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
      }}
    >
      <input
        type="text"
        placeholder="Enter a Task"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className="inputBox"
      />
    </form>
  );
};

export default InputField;
