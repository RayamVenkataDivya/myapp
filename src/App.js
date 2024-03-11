import './App.css';
import React from 'react';
function App() {
  var [students,setStudents]=React.useState([
    {
      firstname:"Divya",
      lastname:"Rayam",
      age:22,
      salary:50000,
      gender:"female"
    },
    {
      firstname:"Dhanu",
      lastname:"Aitha",
      age:25,
      salary:60000,
      gender:"male"
    },
    {
      firstname:"Suman",
      lastname:"Nagineni",
      age:27,
      salary:70000,
      gender:"male"
    },
    {
      firstname:"Sirisha",
      lastname:"Annavarapu",
      age:23,
      salary:30000,
      gender:"female"
    },
    {
      firstname:"Shiva",
      lastname:"Boyapati",
      age:29,
      salary:40000,
      gender:"male"
    }
  ])
  var [fn,setFn]=React.useState()
  var [ln,setLn]=React.useState()
  var [age,setAge]=React.useState()
  var [salary,setSalary]=React.useState()
  var [gender,setGender]=React.useState()
  
  function add(){
    var newObj={
      firstname:fn,
      lastname:ln,
      age:age,
      salary:salary,
      gender:gender
    }
    setStudents([...students,newObj])
  }
  return (
    <div className="App">
      Firstname:<input type="text" onKeyUp={(e)=>{setFn(e.target.value)}}/><br/>
      Lastname:<input type="text"onKeyUp={(e)=>{setLn(e.target.value)}}/><br/>
      Age:<input type="text" onKeyUp={(e)=>{setAge(e.target.value)}}/><br/>
      Salary:<input type="text" onKeyUp={(e)=>{setSalary(e.target.value)}}/><br/>
      Gender:<input type="text" onKeyUp={(e)=>{setGender(e.target.value)}}/><br/>
      <button onClick={add}>Add Student</button>
      <table border="2">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student)=>{
              return (
                <tr>
                  <td>{student.firstname}</td>
                  <td>{student.lastname}</td>
                  <td>{student.age}</td>
                  <td>{student.salary}</td>
                  <td>{student.gender}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
