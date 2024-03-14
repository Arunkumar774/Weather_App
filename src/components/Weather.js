import React, { useState } from "react";
import fetchWeatherData from "./fetchWeatherData";
import config from "../config/config";
import WeatherCard from "./WeatherCard";
import { TextField, Button } from "@mui/material";
import './styles/style.css';

export default function Weather() {
  const [city, setCity] = useState("");
  const [showData, setShowData] = useState(false);
  const [message,setMessage] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = config.API_KEY;

  const handleClick = async () => {
    const data = await fetchWeatherData(city, API_KEY);
    if (!data) {
      setShowData(false);
      setWeatherData(null);
      setMessage("City not found");
      console.log("City not found");
    } else {
      setWeatherData(data);
      setShowData(true);
    }
    console.log(data);
  };
  return (
    <div className="weather-app">
      <h1 style={{ textAlign: "center" }}>Weather App</h1>
      <form style={{textAlign:"center"}}>
        <TextField
          label="Enter city name..."
          variant="outlined"
          value={city}
          size="small"
          onChange={(e) => setCity(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ marginLeft: "10px" }}
          onClick={handleClick}
        >
          Search
        </Button>
      </form>
      {showData ? <WeatherCard {...weatherData} /> : <p style={{textAlign:"center",marginTop:"1rem",color:"red"}}>{message}</p>}
    </div>
  );
}
