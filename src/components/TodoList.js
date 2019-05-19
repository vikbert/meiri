import React from "react";
import TodoItem from "../redux/containers/TodoItem";
import PropTypes from "prop-types";

const TodoList = (props) => {
  return (
    <ul className="todo-list">
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
