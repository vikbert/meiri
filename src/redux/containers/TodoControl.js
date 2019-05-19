import {connect} from 'react-redux';
import TodoControl from '../../components/TodoControl';
import {removeCompleted, updateVisibility} from '../actions/todoActions';
import * as CounterSelector from '../selectors/counterSelector';

const mapStateToProps = state => ({
  visibility: state.todoApp.visibility,
  counterActive: CounterSelector.countActive(state),
  filterCounter: CounterSelector.countByFilterValue(state),
});

const mapDispatchToProps = {
  updateVisibility,
  removeCompletedTodos: removeCompleted,
};

const TodoControlComponent = connect(mapStateToProps, mapDispatchToProps)(TodoControl);

export default TodoControlComponent;
