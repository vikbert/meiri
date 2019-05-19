import {connect} from 'react-redux';
import TodoForm from '../../components/TodoForm';
import {add} from '../actions/todoActions';

export default connect(null, {createTodo: add})(TodoForm);
