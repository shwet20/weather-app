import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { fetchForecast } from "../../lib/weather";
import { SearchContext } from "../../contexts/SearchContext";
import Accordion from "@/components/Accordion";
import WeatherCard from "@/components/weatherCard";

export default function WeatherDetails() {
  const { weather, handleSearch } = useContext(SearchContext); // As SearchContext provides weather and handleSearch

  const router = useRouter();
  const { city } = router.query;

  const [forecast, setForecast] = useState(null);

  // Fetch forecast data and update searched city when city or handleSearch changes
  useEffect(() => {
    const fetchData = async () => {
      if (city) {
        try {
          const forecastData = await fetchForecast(city);
          handleSearch(city); // As we want to update the searched city in context
          setForecast(filterDuplicateDates(forecastData.list));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [city, handleSearch]);

   // Function to filter duplicate dates in forecast data
  const filterDuplicateDates = (forecastList) => {
    const uniqueDates = new Set();
    return forecastList.filter((item) => {
      const date = item.dt_txt.split(" ")[0]; // As dt_txt contains date and time
      if (!uniqueDates.has(date) && uniqueDates.size < 5) {
        uniqueDates.add(date);
        return true;
      }
      return false;
    });
  };

  // Loading state while fetching data
  if (!weather || !forecast) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="p-10 text-center font-semibold text-4xl text-gray-400">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5 md:p-10 md:px-20 lg:px-40">
      <h1 className="text-2xl font-bold mb-4 text-white">
        Today's weather in {weather.name}
      </h1>
      <div className="bg-white p-4 rounded shadow mb-4">
      {weather && <WeatherCard weather={weather} isLinkDisplay={false} />}
      </div>
      <h2 className="text-xl font-bold mb-2 text-white">5-Day Forecast</h2>
      <div className="grid grid-cols-1 gap-4">
        {forecast.map((item, index) => (
          <div key={index} className="">
            <Accordion weatherForecastDetails={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
