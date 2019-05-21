import React from "react";
import TodoItem from "../redux/containers/TodoItem";
import PropTypes from "prop-types";

class TodoList extends React.Component {
  componentDidMount() {
    const { loadTodos } = this.props;
    loadTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  loadTodos: PropTypes.func.isRequired
};

export default TodoList;
