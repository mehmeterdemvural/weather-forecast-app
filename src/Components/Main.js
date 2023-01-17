import React from "react";
import { UseWeather } from "../Contexts/WeatherContext";

function Main() {
  const data = UseWeather();

  function dayCal(number) {
    var date = new Date(number * 1000);
    return date.getDay();
  }

  return (
    <div className="container">
      <div className="row text-center justify-content-center mt-2">
        <h1>{data.name}</h1>
        {data.weatherData &&
          data.weatherData.map((e, i) => (
            <div className="col" key={i}>
              <div className="row text-center justify-content-center">
                <span title={data.dates[dayCal(e.dt)].name}>
                  {data.dates[dayCal(e.dt)].sort}
                </span>
              </div>
              <div className="row">
                <img
                  width="100%"
                  src={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}
                  title={e.weather[0].description}
                ></img>
              </div>
              <div className="row text-center justify-content-center">
                <div
                  style={{ fontSize: "10px", paddingRight: "0px" }}
                  className="col-6 "
                >
                  {Math.floor(e.temp.min)}°
                </div>
                <div
                  style={{ fontSize: "10px", paddingLeft: "0px" }}
                  className="col-6 "
                >
                  {Math.floor(e.temp.max)}°
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Main;
