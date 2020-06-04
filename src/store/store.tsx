import rootReducer from './root-reducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const defaultState = {};

const store = createStore(
    rootReducer,
    defaultState,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
