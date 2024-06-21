import React from "react";
import { formatTimestamp, formatUnixTimestamp } from '../utils/timeUtil';

const WeatherCard = ({ weather, isLinkDisplay }) => {

  return (
    <div className="weatherCardContainer m-3">
      <div className="topShort mx-5 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
        <div className="brifLeft">
          <h5 className="text-sm">
            {formatUnixTimestamp(weather?.dt)}
          </h5>
          <h3 className="flex text-4xl items-center">
            {weather?.main.temp}°C
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} height={'80px'} width={'80px'}/>
          </h3>
        </div>
        <div className="brifRight">
          <p className="flex items-center text-sm mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-5 h-5 mr-2"
            >
              <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
            </svg>
            {weather?.wind.gust}
          </p>
          <p className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 mr-2"
            >
              <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
            </svg>
            {weather?.wind.speed} km/h
          </p>
        </div>
      </div>
      <p className="textNotification mt-4 mx-5">
        {weather?.weather[0].description}
      </p>
      <div className="flex gap-0 sm:gap-5 md:gap-10 flex-wrap">
      <p className="textNotification mt-1 mx-5">Min Temp : {weather?.main.temp_min}°C</p>
      <p className="textNotification mt-1 mx-5">Max Temp : {weather?.main.temp_max}°C</p>
      </div>
      <div className="weatherDetail rounded-md border border-gray-400 px-4 m-5">
        <div className="detailRow flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between border-b border-gray-400 py-3 px-5">
          <div className="detailCol">
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
            <span className="font-bold pl-6">{weather?.main.humidity}%</span>
          </div>
          <div className="detailCol">
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
            <span className="font-bold pl-6">{weather?.main.pressure}</span>
          </div>
        </div>
        <div className="detailRow flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between py-3 px-5">
          <div className="detailCol">
            <label className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-4 h-4 mr-2"
              >
                <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
              </svg>
              Moonrise
            </label>
            <span className="font-bold pl-6">{formatTimestamp(weather?.sys.sunset)}</span>
          </div>
          <div className="detailCol">
            <label className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-4 h-4 mr-2"
              >
                <path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z" />
              </svg>
              Moonset
            </label>
            <span className="font-bold pl-6">{formatTimestamp(weather?.sys.sunrise)}</span>
          </div>
        </div>
      </div>
      {isLinkDisplay ?
      <a
        href={`/weather/${weather.name}`}
        className="text-blue-500 underline mx-5"
      >
        View 5-day forecast
      </a> : <></>}
    </div>
  );
};

export default WeatherCard;
