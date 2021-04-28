import thunk from 'redux-thunk';
import {createStore,applyMiddleware,compose, combineReducers } from 'redux';
import { inputReducer } from './reducers';

const initialState = {
    userInput:{
        userString:'',
    }
}

const composeEnhancer = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);


const reducer = combineReducers({
    userInput: inputReducer,
})

const store =  createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;