import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert("City not found!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-100">
      <div className="bg-sky-50 rounded-2x1 shadow-md p-6 w-96">
        <h1 className="text-2x1 font-bold mb-4">Weather Dashboard</h1>

        {/* Search Bar */}
        <div className="flex mb-6">
          <input 
           type="text"
           placeholder="Search City"
           value={city}
           onChange={(e) => setCity(e.target.value)}
           className="flex-1 p-2 rounded-1-1g border-gray-300 focus:outline-none"
          />
          <button
           onClick={fetchWeather}
           className="bg-blue-500 text-white px-4 py-2 rounded-r-1g hover:bg-blue-600"
          >
            Search 
          </button>
        </div>

        {/* Weather Display */}
        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}

export default App;