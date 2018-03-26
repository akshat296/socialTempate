import {combineReducers} from 'redux';
import word from './wordReducers';

const rootReducer = combineReducers({word});
export default rootReducer;