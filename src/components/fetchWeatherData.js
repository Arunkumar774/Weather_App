const fetchWeatherData = async ( CITY, API_KEY) => {
    try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default fetchWeatherData;