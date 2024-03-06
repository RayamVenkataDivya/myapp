import './App.css';
import React from 'react';

function App() {
  var [students,setStudents]=React.useState(["divya","sirisha","harshitha","bharathi"])
  return (
    <div className="container" style={{boxShadow:"1px 10px 10px 2px",width:"20%",border:"2px solid rgb(132, 119, 119)",padding:"10px",margin:"10px auto"}}>
      <h1>Student</h1>
      {
        students.map((s)=>{
          return <li>{s}</li>
        })
      }
 
    </div>
  );
}

export default App;
