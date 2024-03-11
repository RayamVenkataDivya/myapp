import './App.css';
import React from 'react';

function App() {
  var [students,setStudents]=React.useState(["divya","kavya","bhanu","sai"])
  var [newStudent,setNewStudent]=React.useState()

  function add(){
    var temp=[...students]
    temp.push(newStudent)
    setStudents(temp)
  }
  
  function asce(){
    var temp=[...students]
    temp.sort((a,b)=>{
      if(a<b){
        return -1;
      }
      if(a>b){
        return 1;
      }
      return 0;
    })
    setStudents(temp)
  }

  function desc(){
    students.sort((a,b)=>{
      if(a<b){
        return 1;
      }
      if(a>b){
        return -1
      }
      return 0;
    })
    setStudents([...students])
  }
  return (
    <div>
      <h1>React Students</h1>
      <input type="text" onKeyUp={(e)=>{setNewStudent(e.target.value)}}/>
      <button onClick={add}>Add Students</button>
      <button onClick={asce}>Ascending Order</button>
      <button onClick={desc}>Descending Order</button>
      <ul>
        {
          students.map((student)=>{
            return <li>{student}</li>
          })
        }
      </ul>
 
    </div>
  );
}

export default App;

