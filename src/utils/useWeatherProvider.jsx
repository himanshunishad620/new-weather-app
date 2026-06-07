import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
const WeatherContext = createContext();
export default function WeatherProvider({ children }) {
  const [data, setData] = useState("");
  const [city, setCity] = useState("GORAKHPUR");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (!JSON.parse(localStorage.getItem("cities"))) {
    localStorage.setItem("cities", JSON.stringify([]));
    console.log("Created!");
  }
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await axios.get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=P36YPY773BLHRR3D79CJ49XV6&contentType=json`
        );
        setData(res.data);
      } catch (error) {
        setError(true);
        toast.error("Invalid City Name!", {
          position: "top-right",
          style: {
            backgroundColor: "black", 
            color: "#fff",
          },
        });
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [city]);
  return (
    <WeatherContext.Provider
      value={{ city, loading, months, data, error, setLoading, setCity }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
export const useWeatherProvider = () => useContext(WeatherContext);
