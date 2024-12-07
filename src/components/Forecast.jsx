/* eslint-disable react/prop-types */
import ForecastCard from "./ForecastCard";

export const Forecast = ({ data }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  console.log(data);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        5-Day Forecast
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.map((day, index) => (
          <ForecastCard
            key={index}
            date={formatDate(day.dt)}
            minTemp={day.main.temp_min}
            maxTemp={day.main.temp_max}
            icon={day.weather[0].icon}
            description={day.weather[0].description}
            humidity={day.main.humidity}
            windSpeed={day.main.feels_like}
          />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
