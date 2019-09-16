import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {todoReducer} from './reducer/todoReducer';


const rootReducer=combineReducers({todoReducer});

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk,logger)));

export default store;