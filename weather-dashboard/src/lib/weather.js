import axios from "axios";

const API_KEY = "7859c7f926a6bf29c82c51933135a7cc"; // My OpenWeatherMap API key
const BASE_URL = "https://api.openweathermap.org/data/2.5"; // Base URL for OpenWeatherMap API

// Fetches current weather data for a given city
export const fetchWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city, // City name parameter
      appid: API_KEY, // API key parameter
      units: "metric", // Temperature unit parameter (metric for Celsius)
    },
  });
  return response.data;
};

// Fetches weather forecast data for a given city
export const fetchForecast = async (city) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });
  return response.data;
};
