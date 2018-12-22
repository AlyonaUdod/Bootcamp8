import {combineReducers} from 'redux';
// import some from './someReducer';//импортируем сюда все редьюсоры
import gallery from  './fetchReducer'

const rootReducers=combineReducers({
    // some:some,//перечисляем здесь все наши импортированные редьюсоры
    gallery,
})

export default rootReducers;
