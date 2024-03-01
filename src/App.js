import './App.css';
import {Provider} from 'react-redux';
import Todolist from './Todolist';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Welcome to React Application</h1> 
        <Todolist></Todolist>
      </Provider>
      
 
    </div>
  );
}

export default App;
