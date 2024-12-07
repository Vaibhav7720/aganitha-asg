/* eslint-disable react/prop-types */
import { Wind, Droplets, Eye } from "lucide-react";


export const CurrentWeather = ({ data, location }) => {
  const current = data;
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{location}</h2>
        <p className="text-gray-600">Current Weather</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
            alt={current.weather[0].description}
            className="w-20 h-20"
          />
          <div className="ml-4">
            <h3 className="text-4xl font-bold text-gray-800">
              {Math.round(current.main.temp)}°C
            </h3>
            <p className="text-gray-600 capitalize">
              {current.weather[0].description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center">
            <Wind className="h-6 w-6 text-blue-500 mr-2" />
            <div>
              <p className="text-gray-600">Wind Speed</p>
              <p className="font-semibold">{current.main.feels_like} m/s</p>
            </div>
          </div>

          <div className="flex items-center">
            <Droplets className="h-6 w-6 text-blue-500 mr-2" />
            <div>
              <p className="text-gray-600">Humidity</p>
              <p className="font-semibold">{current.main.humidity}%</p>
            </div>
          </div>

          <div className="flex items-center">
            <Eye className="h-6 w-6 text-blue-500 mr-2" />
            <div>
              <p className="text-gray-600">Visibility</p>
              <p className="font-semibold">
                {(current.visibility / 1000).toFixed(1)} km
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
