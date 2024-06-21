import React, { useContext, useState, useEffect } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const { searchedCity, handleSearch, error } = useContext(SearchContext);

  const [newCity, setNewCity] = useState('');
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  // Load favorite cities from local storage on component mount
  useEffect(() => {
    const storedCities = localStorage.getItem('favoriteCities');
    if (storedCities) {
      setFavoriteCities(JSON.parse(storedCities));
    }
  }, []);

  // Save favorite cities to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
  }, [favoriteCities]);

  // Handle form submission for searching a city
  const handleSubmitSearchBox = (e) => {
    e.preventDefault();
    handleSearch(e.target.city.value);
  };

  // Handle form submission for adding a new favorite city
  const handleSubmitFavCity = (e) => {
    e.preventDefault();
    if (newCity.trim()) {
      const isDuplicate = favoriteCities.some(city => city.toLowerCase() === newCity.toLowerCase());
      if (!isDuplicate) {
        setFavoriteCities([newCity, ...favoriteCities]);
      } else {
        // Display error or alert for duplicate city
        alert('City already exists in favorites.');
    }
    setNewCity('');
    }
  };

  // Handle selecting a city from favorites
  const handleSelectCity = (city) => {
    setSelectedCity(city);
    handleSearch(city);
  };

   // Handle search input change
  const handleSearchInput = (value) => {
    handleSearch(value);
    setSelectedCity('');
  };

  return (
    <div className="flex flex-col flex-wrap md:flex-row gap-4 bg-[#f0f5f9] rounded-t-2xl shadow-md p-5 mt-5 mx-5">
      <div>
        <form onSubmit={handleSubmitSearchBox}>
          <div className='flex items-center justify-between border rounded'>
          <input
            type="text"
            name="city"
            value={searchedCity}
            onChange={(e) => handleSearchInput(e.target.value)}
            placeholder="Enter city name"
            className="p-2"
          />
          <span className='p-2'> <IoSearch/></span>
          </div>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div>
        <form onSubmit={handleSubmitFavCity}>
          <div className='flex'>
          <input
            type="text"
            name="city"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
            placeholder="Add your favorite cities"
            className="border rounded p-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-1">
            Add
          </button>
          </div>
        </form>
      </div>
      <div>
        {favoriteCities.length > 0 && (
          <select
            onChange={(e) => handleSelectCity(e.target.value)}
            className="border rounded p-2 px-3"
            value={selectedCity}
          >
            <option value="">Select a city</option>
            {favoriteCities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default Header;
