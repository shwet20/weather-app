import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ForecastCard from './ForecastCard';

// Accordion component to display weather forecast details
const Accordion = ({ weatherForecastDetails }) => {
  // State for toggling accordion open/closed
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-blue-100 rounded-md mb-2 overflow-hidden">
       {/* Button to toggle accordion */}
      <button
        className={`w-full flex justify-between items-center text-left px-4 py-2 ${isOpen ? "bg-blue-100" : "bg-white"} focus:outline-none`}
        onClick={toggleAccordion}
      >
         {/* Content inside the button */}
        <div className='flex justify-between sm:gap-10 md:gap-20 flex-wrap'>
        <span>Date : {new Date(weatherForecastDetails?.dt_txt).toLocaleDateString()}</span>
        <span className="flex gap-2 items-center"><img src={`http://openweathermap.org/img/wn/${weatherForecastDetails.weather[0].icon}@2x.png`} height={'20px'} width={'20px'}/>{weatherForecastDetails.weather[0].main}</span>
        <span>Temperature : {weatherForecastDetails?.main.temp}°C</span>
        </div>
        <span>{isOpen ? <FiChevronUp /> : <FiChevronDown />}</span>
      </button>
      {/* Render ForecastCard component when accordion is open */}
      {isOpen && <div className="px-4 py-2 bg-blue-50">
        <ForecastCard weatherForecast={weatherForecastDetails}/>
        </div>}
    </div>
  );
};

export default Accordion;
