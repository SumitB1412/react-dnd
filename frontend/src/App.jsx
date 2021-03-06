import React, { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { DragDropContext } from "react-beautiful-dnd";



const App = () => {
  const [todos, setTodos] = useState([]);
  const [CompletedTodos, setCompletedTodos] = useState([]);

  
  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = CompletedTodos;
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
    // localStorage.setItem("completed", JSON.stringify(CompletedTodos));
    // localStorage.setItem("todos", JSON.stringify(todos));
    // localStorageTodo = JSON.parse(localStorage.getItem("todos")) || todos;
    // localStorageCompletedTodo =
    //   JSON.parse(localStorage.getItem("completed")) || CompletedTodos;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <TodoList
          todos={todos}
          setTodos={setTodos}
          CompletedTodos={CompletedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
