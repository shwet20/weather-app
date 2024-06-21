import { SearchProvider } from '../contexts/SearchContext';
import '../app/globals.css'
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
      // Wrap the entire application with SearchProvider 
    <SearchProvider>
      <h1 className="text-4xl font-bold mt-5 text-center text-white">Weather Dashboard</h1>
      {/* Render the component passed as prop along with its pageProps */}
      <Component {...pageProps} />
    </SearchProvider>
  );
}

export default MyApp;
