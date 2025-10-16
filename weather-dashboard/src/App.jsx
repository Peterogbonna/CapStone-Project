import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false); // 👈 new
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true); // 👈 start loading

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Lagos,Edo,Abuja&appid=e9e419de860c750c1cf171ddf7b98ab9&units=metric`
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
    } finally {
      setLoading(false); // 👈 stop loading
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-sky-300 via-blue-400 to-indigo-500">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-6 w-96 text-white">
        <h1 className="text-2xl font-bold mb-4 text-center">Weather Dashboard</h1>

        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Search City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 p-2 rounded-l-lg border border-gray-300 text-gray-800 focus:outline-none"
          />
          <button
            onClick={fetchWeather}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center items-center text-gray-600">
            <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mr-2"></div>
            Fetching weather...
          </div>
        )}

        {/* Weather Display */}
        {!loading && weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}

export default WeatherApp;