import {createStore} from 'redux';
import CounterReducer from "./reducers/counter.reducer";

var store =new createStore(CounterReducer)

export default store;