import { createStore } from 'redux' // дает возможность создать глобальный объект store.
import rootReducer from '../reducers'

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // подключаем в проект реакт девтулс, чтобы в брайзере с реакт девтулсом был доступ к расширению 

const store = createStore(rootReducer, DevTools);

export default store;