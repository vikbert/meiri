import {applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

export default function configureEnhancer() {
  const REDUX_EXTENSION = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined;

  if (REDUX_EXTENSION) {
    return compose(applyMiddleware(thunk), REDUX_EXTENSION);
  }

  return applyMiddleware(thunk);
}
