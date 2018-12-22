import {combineReducers} from 'redux';
import blog from './fetchReducer'
import input from './inputReducer'
import paint from './paintReducer'

const rootReducers = combineReducers({
    blog, 
    input,
    paint,
})

export default rootReducers;
