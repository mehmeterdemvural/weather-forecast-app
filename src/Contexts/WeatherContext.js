import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState(localStorage.getItem("Country") || "istanbul");
  const [weatherData, setWeatherData] = useState([]);

  let dates = [{name: "Sunday", sort:"Sun"}, {name: "Monday",sort:"Mon"}, {name: "Tuesday",sort:"Tue"}, {name: "Wednesday",sort:"Wed"}, {name: "Thursday",sort:"Thu"}, {name: "Friday",sort:"Fri"}, {name: "Saturday",sort:"Sat"}];
  useEffect(() => {

    (async () => {
      await axios(
        `https://pro.openweathermap.org/data/2.5/forecast/climate?${
          "q=" + country
        }&units=metric&lang=tr&cnt=7&appid=c73ed8db49a8e7572a3e8ba152a702b1`
      ).then((res) => {
        setWeatherData(res.data.list);
        setName(res.data.city.name);
      });
    })();
    localStorage.setItem("Country", country);
  }, [country]);
  const values = {
    country,
    name,
    setCountry,
    weatherData,
    dates,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const UseWeather = () => useContext(WeatherContext);
