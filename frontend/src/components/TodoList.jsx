import React, { useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";
import InputField from "./InputField";
import { Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

const TodoList = ({ todos, setTodos, CompletedTodos, setCompletedTodos }) => {

  const [todo, setTodo] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: uuid(), title: todo }]);
      setTodo("");
    }
  };

  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className={"todos"}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todosHeading">Todos</span>
            {todos.map((todo, index) => (
              <SingleTodo index={index} todo={todo} key={todo.id} />
            ))}
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={"todos"}
            style={{ backgroundColor: "rgb(235, 103, 80)" }}
          >
            <span className="todosHeading">Completed</span>
            {CompletedTodos.map((el, index) => (
              <SingleTodo index={index} todo={el} key={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
