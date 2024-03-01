import CounterReducer from "./reducers/Counter.reducer";
import {createStore} from 'redux'

var store=new createStore(CounterReducer);

export default store;