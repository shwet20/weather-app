import React, { createContext, useState, useEffect } from 'react';
import { fetchWeather } from '../lib/weather';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchedCity, setSearchedCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

   // Function to fetch weather data for the searched city
  const fetchWeatherData = async () => {
    try {
      const response = await fetchWeather(searchedCity);
      setWeather(response);
      setError('');
    } catch (err) {
      setError('City not found');
      setWeather(null);
    }
  };

  // Fetch weather data when searchedCity state changes
  useEffect(() => {
    if (searchedCity.trim() !== '') {
      fetchWeatherData();
    }
  }, [searchedCity]);

   // Function to handle search input
  const handleSearch = (city) => {
    // Update searchedCity state with the input city
    setSearchedCity(city);
  };

  return (
    <SearchContext.Provider value={{ searchedCity, weather, error, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
