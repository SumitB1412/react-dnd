import React from "react";
import { Draggable } from "react-beautiful-dnd";

const SingleTodo = ({ index, todo }) => {
  // console.log(todo);
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={"todosSingle"}
        >
          <span className="todosSingleText">{todo.title}</span>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
