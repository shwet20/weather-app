import React from "react";

const ForecastCard = ({ weatherForecast }) => {
  return (
    <div className="border-2 p-5 bg-white rounded-lg">
      <span className="flex gap-2 items-center">
        <img
          src={`http://openweathermap.org/img/wn/${weatherForecast?.weather[0].icon}@2x.png`}
          height={"50px"}
          width={"50px"}
          alt="img"
        />
        {weatherForecast?.weather[0].main}
      </span>
      <p className="font-semibold">{weatherForecast?.weather[0].description}</p>
      <div className="flex flex-col gap-2 mt-2 pt-2 border-t-2">
        <div className="detailCol flex">
          <label className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-4 h-4 mr-2"
            >
              <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
            </svg>
            Humidity
          </label>
          <span className="pl-6">{weatherForecast?.main.humidity}%</span>
        </div>
        <div className="detailCol flex">
          <label className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4 mr-2"
            >
              <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
            </svg>
            Pressure
          </label>
          <span className="pl-6">{weatherForecast?.main.pressure}</span>
        </div>
        <div className="detailCol flex">
          <label className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4 mr-2"
            >
              <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
            </svg>
            Wind Speed
          </label>
          <span className="pl-6">{weatherForecast?.wind.speed} m/s</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 mt-2 pt-2 border-t-2">
        <p>Max Temp: {weatherForecast?.main.temp_max}°C</p>
        <p>Min Temp: {weatherForecast?.main.temp_min}°C</p>
      </div>
    </div>
  );
};

export default ForecastCard;
