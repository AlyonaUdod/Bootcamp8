import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import films from './fetchReducer'
import filteredArr from './filterReducer'


const rootReducers = combineReducers({
    films, 
    filteredArr,
    form: formReducer,
})

export default rootReducers;
