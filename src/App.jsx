import { useState } from "react";
import Navbar from "./components/Navbar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { fetchWeather, fetchForecast } from "./utils/api";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (location) => {
    try {
      setLoading(true);
      setError(null);
      setLocation(location);

      const weather = await fetchWeather(location);
      const forecastData = await fetchForecast(location);
      await setCurrentWeather(weather);
      await setForecast(forecastData);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <main className="container mx-auto px-4 py-8">
        {loading && (
          <div className="text-center text-gray-600">
            Loading weather data...
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
            {error}
          </div>
        )}

        {!error && currentWeather && !loading && (
          <>
            <CurrentWeather data={currentWeather} location={location} />
            <Forecast data={forecast} />
          </>
        )}

        {!error && !currentWeather && !loading && !error && (
          <div className="text-center text-gray-600 mt-20">
            <h2 className="text-2xl font-bold mb-2">Welcome to WeatherScope</h2>
            <p>Enter a location above to get started</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
