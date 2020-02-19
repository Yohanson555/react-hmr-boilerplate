import { combineReducers } from 'redux';

import DefaultReducer from './DefaultReducer';
import ToDoReducer from './ToDoReducer';

export default combineReducers({
    def: DefaultReducer,
    todo: ToDoReducer,
});