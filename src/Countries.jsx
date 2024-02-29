import React from 'react';
import axios from 'axios';
import CountryDetails from './CountryDetails';
import {Outlet,Link} from 'react-router-dom';

function Countries(){
    var [countries,setCountries]=React.useState([])
    var [loader,setLoader]=React.useState(true)
    var [selectedCountry,setSelectedCountry]=React.useState({});

    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((res)=>{
            setCountries(res.data)
            setLoader(false)
        })
        .catch(()=>{})
    },[])
    return(
        <div className="App">
            <h2>Countries</h2>
            {loader && <h4>Loading...</h4>}

            <div style={{display:"flex",flexWrap:"wrap"}}>
            <ul style={{width:"50%"}}>
            {
                countries.map((c)=>{
                    return <li>
                        <Link to={"countryDetails/"+c.name.common} state={c}>{c.name.common}</Link>
                        </li>
                })

            }
            </ul>
            <div style={{width:"40%"}}>
                <Outlet></Outlet>
            </div>
                 
            </div>
            
             
        </div>



    )
}
export default Countries;