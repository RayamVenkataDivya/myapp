import './App.css';
import React from 'react';
import axios from 'axios'

function App() {
  var [countries,setCountries]=React.useState([])
  var [loader,setLoader]=React.useState(true)

  React.useEffect(()=>{
    axios.get("https://restcountries.com/v3/all")
    .then((res)=>{
      setCountries(res.data);
      setLoader(false)
    })
    .catch(()=>{})
  },[])

  return (
    <div className="App">
      <h1>Countries</h1>
      {loader && <h3>Loading....</h3>}
      <ul>
        {
          countries.map((c)=>{
            return <li>{c.name.common}</li> 
          })
        }
      </ul>
      
    </div>
  );
}

export default App;
