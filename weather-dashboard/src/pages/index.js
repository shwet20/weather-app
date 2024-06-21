import { useContext, useEffect } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import WeatherCard from '@/components/weatherCard';
import Header from '@/components/Header';


export default function Home() {
  const { weather, handleSearch } = useContext(SearchContext);

  useEffect(() => {
    //TO DO: use Geolocation to set default value as Current Location
    //Here I use hardCoded value as default value
    handleSearch("Pune") 
  }, [])

  return (
    <div className="container mx-auto p-10 md:px-20 lg:px-40">
      <div className='flex flex-col gap-5 bg-container-bg rounded-lg'>
      <Header/>
      <div>
      <h3 className='font-bold px-10 text-2xl'>{weather?.name}</h3>
      {weather && <WeatherCard weather={weather} isLinkDisplay={true} />}
      </div>
      </div>
    </div>
  );
}
