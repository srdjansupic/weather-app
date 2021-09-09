import React, { useState,useEffect } from 'react';
import Template from './Component/Template';

function App() {

    const API = {
        key: "329364a5b8aab3a004027a3e9a221dae",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    const [city, setCity] = useState("Belgrade");
    const [apiData, setApiData] = useState([]);

    const setNameCity = (ev) => {
        setCity(ev.target.value);
    }

    useEffect(()=>{
        console.log(city);
            fetch(`${API.base}weather?q=${city}&units=metric&APPID=${API.key}`)
                .then(res => res.json())
                .then(data => {
                    setApiData(data);
                    console.log(apiData);
                })
    },[])
    

    const loadApi = ev => {

        if (ev.key === "Enter") {
            console.log(city);
            fetch(`${API.base}weather?q=${city}&units=metric&APPID=${API.key}`)
                .then(res => res.json())
                .then(data => {
                    setApiData(data);
                    console.log(apiData);
                })
                document.querySelector("#search").value ="";
        }


    }


    let date = String(new window.Date())
    date = date.slice(3, 15);
    console.log(date);




    return (

        <div>

                    <input id="search" type="text" placeholder="Search.."  onChange={setNameCity} onKeyPress={loadApi}></input>
                    <Template apiData={apiData} date={date} />

        </ div>

            )
}

            export default App;
