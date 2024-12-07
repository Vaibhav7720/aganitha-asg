/* eslint-disable react/prop-types */
import { Wind, Droplets } from "lucide-react";


const ForecastCard = ({
  date,
  minTemp,
  maxTemp,
  icon,
  description,
  humidity,
  windSpeed,
}) => {

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="text-center mb-2">
        <h3 className="font-semibold text-gray-800">{date}</h3>
      </div>

      <div className="flex justify-center mb-2">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="w-16 h-16"
        />
      </div>

      <div className="text-center mb-3">
        <p className="text-sm capitalize text-gray-600">{description}</p>
        <div className="flex justify-center gap-2 font-semibold">
          <span className="text-red-500">{Math.round(maxTemp)}°</span>
          <span className="text-blue-500">{Math.round(minTemp)}°</span>
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <div className="flex items-center">
          <Wind className="h-4 w-4 mr-1" />
          <span>{windSpeed}m/s</span>
        </div>
        <div className="flex items-center">
          <Droplets className="h-4 w-4 mr-1" />
          <span>{humidity}%</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
