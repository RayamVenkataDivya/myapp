import './App.css';
import React from "react";
import TeamsList from './TeamsList';

function App() {
  var [teams,setTeams]=React.useState([
    {
      tname:"Mumbai Indians",
      tmembers:["Rohit","surya","kishan","bhumra","david"]
    },
    {
      tname:"Royal Challengers Bengaluru",
      tmembers:["Faf","virat","DK","Maxi","Siraj"]
    },
    {
      tname:"Sun Risers Hyderabad",
      tmembers:["Kane Williamson","Manish","Bhuvi","Warner","Karan"]

    },
    {
      tname:"Chennai Super Kings",
      tmembers:["Dhoni","Raina","Jadeja","Rayudu","Ben Stokes"]
    }
  ])
  return (
    <div className="App">
      <h1>Welcome to Edupoly React</h1>
      {
        teams.map((team)=>{
          return <TeamsList team={team}></TeamsList>
        })
      }
    </div>
  );
}

export default App;
