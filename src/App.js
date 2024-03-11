import './App.css';
import React from 'react';

function App() {
  var [total,setTotal]=React.useState();
 
  function add(){
    var value1=+document.getElementById("d1").value;
    var value2=+document.getElementById("d2").value;
    setTotal(value1+value2)
  }
  return (
    <div>
      <input type="text" id="d1"/>
      <input type="text" id="d2"/>
      <button onClick={()=>{add()}}>Add</button>
      <h2>{total}</h2>
    </div>
  );
}

export default App;
