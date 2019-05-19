import React, {Component} from "react";
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';
import TodoStarIcon from '../redux/containers/TodoStarIcon';

class TodoItem extends Component {
  state = {
    completed: this.props.todo.completed,
    starred: this.props.todo.starred,
    editing: false,
  };

  handleCheckboxChange = event => {
    const isCompleted = event.target.checked;
    this.setState({
      completed: isCompleted,
    });

    const newTodo = {...this.props.todo, completed: isCompleted};

    this.props.updateTodo(newTodo, this.props.todo);
  };

  handleDoubleClick = () => {
    this.setState({
      editing: true,
    });
  };

  handleToggleItemStarState = (starred) => {
    this.setState({
      starred: starred,
    });
  };

  handleInputFieldUpdate = (text) => {
    if (text.length === 0) {
      this.props.deleteTodo(this.props.todo.id);
    } else if (text !== this.props.todo.title) {
      const newTodo = {...this.props.todo, title: text};
      this.props.updateTodo(newTodo, this.props.todo);
    }

    this.setState({editing: false});
  };

  render() {
    let itemView;
    if (this.state.editing) {
      itemView = (
        <TodoTextInput editing={this.state.editing}
                       text={this.props.todo.title}
                       handleInputFieldUpdate={this.handleInputFieldUpdate}/>
      );
    } else {
      itemView = (
        <div className="view">
          <input className="toggle" type="checkbox"
                 onChange={this.handleCheckboxChange}
                 defaultChecked={this.state.completed}
          />
          <label onDoubleClick={this.handleDoubleClick}>{this.props.todo.title}</label>
          <TodoStarIcon todo={this.props.todo} toggleItemStarState={this.handleToggleItemStarState}/>
        </div>
      );
    }
    return (
      <li className={classnames(
        'todo',
        {'starred_todo': this.state.starred},
        {'completed': this.state.completed},
        {'editing': this.state.editing},
      )}>
        {itemView}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
