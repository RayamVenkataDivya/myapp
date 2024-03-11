import './App.css';
import React from 'react';

function App() {
  var [result,setResult]=React.useState()

  function add(){
    var n1=+document.getElementById("d1").value
    var n2=+document.getElementById("d2").value
    setResult(n1+n2)
  }
  
  function sub(){
    var n1=+document.getElementById("d1").value
    var n2=+document.getElementById("d2").value
    setResult(n1-n2)
  }
  
  function mul(){
    var n1=+document.getElementById("d1").value
    var n2=+document.getElementById("d2").value
    setResult(n1*n2)
  }
  
  function div(){
    var n1=+document.getElementById("d1").value
    var n2=+document.getElementById("d2").value
    setResult(n1/n2)
  }
  return (
    <div>
      <input type="text" id="d1"/>
      <input type="text" id="d2"/>
      <button onClick={add}>Addition</button>
      <button onClick={sub}>Substraction</button>
      <button onClick={mul}>Multiplication</button>
      <button onClick={div}>Division</button>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
