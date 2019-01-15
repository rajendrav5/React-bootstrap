import { combineReducers } from 'redux'
import incReducer from './incReducer';

const rootReducer = combineReducers({
    counterVal: incReducer,
});

export default rootReducer;