import {combineReducers} from 'redux';

import task from './taskReducer'
import text from './textReducer'
import paint from './paintReducer'

const rootReducer = combineReducers({
    tasks: task,
    text: text, 
    paint: paint,
})

export default rootReducer;
