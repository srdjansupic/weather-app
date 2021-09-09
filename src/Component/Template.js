import React from 'react';

function Template({ apiData, date }) {


    


    return (
        <div id="main">
            <div className="info-city">
                <h1>{apiData.name},</h1>
                {(typeof apiData.sys != "undefined") ? (
                    <p> {apiData.sys.country}</p>
                ) : ('')}
                <span>{date}</span>
            </div>
            <div className="temp">
                {(typeof apiData.main != "undefined") ? (
                    <h2>{Math.round(apiData.main.temp)}°C</h2>
                ) : ('')}
            </div>
            <div className="background">
                {(typeof apiData.main != "undefined") ? (
                    <div className={apiData.main.temp > 23 ? "sunny" : "cold"}></div>
                ) : ('')}
            </div>
            {(typeof apiData.weather != "undefined") ? (
                <div className="weather">{apiData.weather[0].description.toUpperCase()}</div>
            ) : ('')}


            {(typeof apiData.main != "undefined") ? (
                <div className="min-max">
                    <div className="min"><p>{Math.round(apiData.main.temp_min)}</p><span>MIN</span></div>
                    <div className="max"><p>{Math.round(apiData.main.temp_max)}</p><span>MAX</span></div>
                </div>
            ) : ('')}


        </div>

    )
}

export default Template;
