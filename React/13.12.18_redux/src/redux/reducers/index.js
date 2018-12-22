import {combineReducers} from 'redux';

import count from './counterReduser';

const rootReducer = combineReducers({
    count: count, 
})

export default rootReducer;
