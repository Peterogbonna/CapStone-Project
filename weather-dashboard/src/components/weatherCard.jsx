import { WiDaySunny, WiRain, WiCloud, WiThunderstorm, WiSnow, WiFog } from "react-icons/wi";

export default function WeatherCard({ data }) {
  const weatherDescription = data.weather[0].description;
  const mainWeather = data.weather[0].main;
  const cityName = data.name;
  const temperature = Math.round(data.main.temp);

  // Determine icon and message
  let IconComponent;
  let weatherMessage = "";

  switch (mainWeather.toLowerCase()) {
    case "rain":
      IconComponent = WiRain;
      weatherMessage = `It might rain today in ${cityName} ☔`;
      break;
    case "clouds":
      IconComponent = WiCloud;
      weatherMessage = `It's cloudy in ${cityName} ☁️`;
      break;
    case "clear":
      IconComponent = WiDaySunny;
      weatherMessage = `It's sunny today in ${cityName} 🌞`;
      break;
    case "thunderstorm":
      IconComponent = WiThunderstorm;
      weatherMessage = `There’s a thunderstorm in ${cityName} ⚡`;
      break;
    case "snow":
      IconComponent = WiSnow;
      weatherMessage = `Snowfall expected in ${cityName} ❄️`;
      break;
    case "fog":
    case "mist":
      IconComponent = WiFog;
      weatherMessage = `It’s foggy in ${cityName} 🌫️`;
      break;
    default:
      IconComponent = WiDaySunny;
      weatherMessage = `The weather looks ${weatherDescription} in ${cityName}`;
  }

  return (
    <div className="bg-white/30 rounded-xl p-4 text-center text-gray-900">
      <h2 className="text-xl font-semibold mb-2">{cityName}</h2>
      <div className="flex justify-center items-center mb-3">
        <IconComponent className="text-6xl text-blue-600" />
      </div>
      <p className="text-4xl font-bold mb-2">{temperature}°C</p>
      <p className="capitalize text-lg mb-1">{weatherDescription}</p>
      <p className="text-sm text-gray-700 mb-2">
        Humidity: {data.main.humidity}% | Wind: {data.wind.speed} m/s
      </p>
      <p className="text-md font-medium text-blue-800 mt-3">{weatherMessage}</p>
    </div>
  );
}
