import './App.css';
import React from 'react';

function App() {
  var [students,setStudents]=React.useState([
    {
      fname:"Divya",
      lname:"Rayam",
      gender:"Female"
    },
    {
      fname:"Rakesk",
      lname:"Rayam",
      gender:"Male"
    },
    {
      fname:"Sirisha",
      lname:"Annavarapu",
      gender:"Female"
    },
    {
      fname:"Dhanu",
      lname:"Aitha",
      gender:"Male"
    },
    {
      fname:"Diyaa",
      lname:"Chowdary",
      gender:"Female"
    },
    {
      fname:"Sakshi",
      lname:"Reddy",
      gender:"Female"
    },
    {
      fname:"Deepak",
      lname:"Aitha",
      gender:"Male"
    }

  ])
  return (
    <div style={{border:"2px solid red",padding:"10px",margin:"10px"}}>
      <table style={{border:"1px solid black",marginLeft:"40%"}}>
        <thead>
          <tr style={{border:"1px solid black"}} >
            <th style={{border:"1px solid black"}}>Firstname</th>
            <th style={{border:"1px solid black"}}>Lastname</th>
            <th style={{border:"1px solid black"}}>Gender</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student)=>{
              return (
                <tr style={student.gender==="Female"?{backgroundColor:"pink"}:{backgroundColor:"cyan"}}>
                  <td style={{border:"1px solid black"}} >{student.fname}</td>
                  <td style={{border:"1px solid black"}}>{student.lname}</td>
                  <td style={{border:"1px solid black"}}>{student.gender}</td>
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
