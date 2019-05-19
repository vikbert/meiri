import { connect } from 'react-redux'
import TodoList from '../../components/TodoList'
import * as ListSelector from '../selectors/listSelector'

const mapStateToProps = state => ({
  todos: ListSelector.getFilteredTodos(state)
});

export default connect(mapStateToProps, {})(TodoList);
