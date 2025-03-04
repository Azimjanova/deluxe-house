import { createStore, combineReducers } from 'redux';
import imageReducer from './imageReducer.js';

const rootReducer = combineReducers({
    image: imageReducer,
});

const store = createStore(rootReducer);

export default store;