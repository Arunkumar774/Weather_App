import React from "react";
import "./styles/style.css";

const WeatherCard = ({
    name,
    main,
    sys,
    visibility,
    wind,
    weather,
}) => {
    const { feels_like, humidity, pressure, temp, temp_max, temp_min } = main;
    var sunrise = new Date(sys.sunrise * 1000);
    var sunset = new Date(sys.sunset * 1000);
    sunrise = sunrise.getHours() + ":" + sunrise.getMinutes() + " AM";
    sunset = sunset.getHours() - 12 + ":" + sunset.getMinutes() + " PM";

    const { deg, speed } = wind;
    const windDirection = {
        0: "North",
        45: "North East",
        90: "East",
        135: "South East",
        180: "South",
        225: "South West",
        270: "West",
        315: "North West",
    };
    var direction = "";
    for (const degree in windDirection) {
        if (deg >= degree) {
            direction = windDirection[degree];
        } else {
            break;
        }
    }
    return (
        <div className="weather-card">
            <h2 style={{ textAlign: "right" }}>
                {name}, {sys.country}
            </h2>
            <p>
                Current Weather <br /> {new Date().toLocaleTimeString()}
            </p>
            <div className="weather-condition">
                <img
                    src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
                    style={{ width: "4rem", height: "4rem" }}
                    alt="weather icon"
                />
                <p style={{ fontSize: "2.4rem", margin: "0 10px" }}>
                    {temp}&#176;C
                </p>
                <div>
                    <p>{weather[0].description}</p>
                    <p>Feels like : {feels_like}&#176;C</p>
                </div>
            </div>
            <div className="additional_info">
                <div>
                    Temparature Range : {temp_min}&#176;C - {temp_max}&#176;C
                </div>
                <div>
                    Wind : {speed} km/h, {direction}
                </div>
                <div>Humidity : {humidity} %</div>
                <div>Visibility : {visibility / 1000} km</div>
                <div>Pressure : {pressure} mb</div>
                <div>Sunrise : {sunrise}</div>
                <div>Sunset : {sunset}</div>
            </div>
        </div>
    );
};

export default WeatherCard;
