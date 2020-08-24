import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import allReducers from './index';

const checkReduxDevtoolsInstalled = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = checkReduxDevtoolsInstalled()
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(allReducers, enhancer);

export default store;
