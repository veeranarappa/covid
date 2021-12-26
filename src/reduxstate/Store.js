import {createStore,combineReducers}  from 'redux';
import { Reducer } from './Reducer';


const rootReducer =  combineReducers({
    Reducer : Reducer
})

let store = createStore(rootReducer);



export default store;    