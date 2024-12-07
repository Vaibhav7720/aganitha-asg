// const API_KEY = "d514d0366cfcf32054af6e28fec6e32c";
import axios from "axios";
import { processForecastData } from "./processList";
const API_KEY = "d514d0366cfcf32054af6e28fec6e32c"; // We can store it in an env file for security reasons

export const fetchWeather = async (location) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
  );
  //   `http://localhost:5000/weather?location=${location}`
  console.log(response);
  return response.data;
};

export const fetchForecast = async (location) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`
  );
  //   `http://localhost:5000/forecast?location=${location}`
  console.log(response);
  const data = response.data;
  const dailyForecast = processForecastData(data.list);
  return dailyForecast;
};
