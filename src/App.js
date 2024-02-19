import './App.css';
import React from 'react';

function App() {
  var [misquad,setMisquad]=React.useState(["Rohit Sharma", "Kieron Pollard", "Suryakumar Yadav", "Jasprit Bumrah", "Ishan Kishan","Ramandeep Singh", "Rahul Buddhi", "Hrithik Shokeen", "Arjun Tendulkar", "Aryan Juyal", "Fabian Allen", "Dewald Brevis", "Basil Thampi"])
  var [playingXI,setPlayingXI]=React.useState([])

  function deletemisquad(i){
    playingXI.push(misquad[i]);
    misquad.splice(i,1);
    setMisquad([...misquad])
    setPlayingXI([...playingXI])
  }

  function deleteplayingXI(i){
    misquad.push(playingXI[i]);
    playingXI.splice(i,1);
    setMisquad([...misquad])
    setPlayingXI([...playingXI])
    
  }

  
  return (
    <div className="App d-flex flex-wrap">
      <div className="App2">
        <h4>Mumbai Indian Squad</h4>
        {
          misquad.length===0?"(no player selected)":"(click to unselect player)"
        }
        {
          misquad.map((m,i)=>{
            return <li class="text-success" onClick={()=>deletemisquad(i)}>{m}</li>
          })
        }
      </div>

      <div className="App2">
        <h4>PlayingXI- selected-{playingXI.length}</h4>
        {
          playingXI.length===0?"(no player selected)":"(click to unselect player)"
        }
        {
          playingXI.map((p,i)=>{
            return <li class="text-info" onClick={()=>deleteplayingXI(i)}>{p}</li>
          })
        }

      </div>

 
    </div>
  );
}

export default App;
