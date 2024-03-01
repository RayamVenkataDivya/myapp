import TodolistReducer from "./Todolist.reducer";
import {createStore} from 'redux';

let store = new createStore(TodolistReducer);

export default store;
