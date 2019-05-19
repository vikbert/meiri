import {connect} from 'react-redux';
import TodoStarIcon from '../../components/TodoStarIcon';
import {update} from '../actions/todoActions';
import * as CounterSelector from '../selectors/counterSelector';

const mapStateToProps = state => ({
  counterActiveStarred: CounterSelector.countActiveStarred(state),
});

export default connect(mapStateToProps, {updateTodo: update})(TodoStarIcon);
