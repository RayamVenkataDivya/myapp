import './App.css';
import store from './store/store';
import {Provider} from 'react-redux'
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Welcome to React Application</h1>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
