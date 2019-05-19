import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoTextInput extends Component {
  state = { text: this.props.text || "" };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleBlur = () => {
    this.props.handleInputFieldUpdate(this.state.text.trim());
  };

  handleSubmit = (e) => {
    if (e.key === "Enter") {
      this.props.handleInputFieldUpdate(this.state.text.trim());
    }
  };

  render() {
    return (
      <input
        className="edit"
        autoFocus={true}
        type="text"
        value={this.state.text}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

TodoTextInput.propTypes = {
  handleInputFieldUpdate: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired
};

export default TodoTextInput;
