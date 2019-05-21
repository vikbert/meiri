import { connect } from "react-redux";
import TodoList from "../../components/TodoList";
import * as ListSelector from "../selectors/listSelector";
import { loadTodos } from "../actions/todoActions";

const mapStateToProps = (state) => ({
  todos: ListSelector.getFilteredTodos(state)
});

export default connect(
  mapStateToProps,
  { loadTodos: loadTodos }
)(TodoList);
