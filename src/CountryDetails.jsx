import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';


function CountryDetails({country}){
    var data = useLocation();
    // console.log(data);
    var params= useParams();
    // console.log(params)
    var [details,setDetails]=React.useState({})

    React.useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${params.cname}`)
        .then((res)=>{
            console.log(res)
            setDetails({...res.data[0]})
        })
    },[params])
    return (
        <div class="App">
            <h3>CountryDetails:{details?.name?.common}</h3>
            <img src={data.state?.flags[0]} alt="" style={{width:"100%"}}/>
        </div>
    )
}
export default CountryDetails;