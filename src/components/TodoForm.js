import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoForm extends Component {
  state = { inputText: "" };

  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const text = this.state.inputText.trim();
      if (!text) {
        return;
      }

      const newTodo = {
        id: window.todoStorage.uid++,
        title: this.state.inputText,
        starred: 0,
        completed: false
      };

      this.props.createTodo(newTodo);
      this.setState({ inputText: "" });
    }
  };

  render() {
    return (
      <div>
        <h1>{"每日坚持"}</h1>
        <input
          className="new-todo"
          type="text"
          placeholder="What needs to be done?"
          value={this.state.inputText}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          autoFocus={true}
        />
      </div>
    );
  }
}

TodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired
};

export default TodoForm;
