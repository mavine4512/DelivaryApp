import {createStore} from 'redux';
import itemsReducer from './moviesApp';

const store = createStore(itemsReducer);

export default store;
