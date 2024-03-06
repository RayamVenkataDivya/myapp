import './App.css';
import React from'react';

function App() {
  var [count,setCount]=React.useState(100)
  function inc(){
    setCount(count+1)
  }
  function dec(){
    setCount(count-1)
  }
  return (
    <div className="App">
      <h1>Count:{count}</h1>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
    </div>
  );
}

export default App;
