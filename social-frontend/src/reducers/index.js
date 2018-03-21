import {combineReducers} from 'redux';
import chat from './chatReducers';

const rootReducer = combineReducers({chat});
export default rootReducer;