import './App.css';
import React from 'react';

function App() {
  var [count,setCount]=React.useState(10)
  function incBy10(){
    setCount(count+10)
  }
  function incBy100(){
    setCount(count+100)
  }
  function decBy10(){
    setCount(count-10)
  }
  return (
    <div className="App">
      <h3>Welcome to ReactJs Counter</h3>
      <h1>{count}</h1>
      <button onClick={incBy10}>Inc count by 10</button>
      <button onClick={incBy100}>Inc count by 100</button>
      <button onClick={decBy10}>Dec count by 10</button>
    </div>
  );
}

export default App;
