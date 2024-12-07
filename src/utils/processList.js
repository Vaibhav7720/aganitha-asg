export const processForecastData = (forecastList) => {
  // Create a map to store one forecast per day
  const dailyForecast = {};

  forecastList.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0]; // Extract the date (e.g., "2023-12-07")
    const time = entry.dt_txt.split(" ")[1]; // Extract the time (e.g., "12:00:00")

    // Select forecasts around 12:00 PM (or the desired time)
    if (time === "12:00:00") {
      dailyForecast[date] = entry;
    }
  });

  // Convert the map to an array and return only 5 days
  return Object.values(dailyForecast).slice(0, 5);
};
