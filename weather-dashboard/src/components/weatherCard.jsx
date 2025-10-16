function WeatherCard({ data }) {
    if (!data || !data.main || !data.weather || !data.wind) {
        return (
            <div className="bg-white p-4 rounded-xl shadow text-center text-gray-500">
                No weather data available
            </div>
        );
    }

    const { name, main, weather, wind } = data;

    return (
        <div className="bg-white p-4 rounded-xl shadow text-center">
            <h2 className="text-xl font-semibold">{name}</h2>

            <div className="flex justify-center items-center my-4">
                <img
                  src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  alt={weather[0].description}
                  className="w-16 h-16"
                />
                <p className="text-3xl font-bold ml-2">{Math.round(main.temp)}°C</p>
            </div>

            <p className="capitalize text-gray-600">{weather[0].description}</p>

            <div className="mt-4 space-y-2">
                <p className="bg-sky-50 p-2 rounded">Humidity: {main.humidity}%</p>
                <p className="bg-sky-50 p-2 rounded">Wind: {wind.speed} km/h</p>
                <p className="bg-sky-50 p-2 rounded">
                    Feels Like: {Math.round(main.feels_like)}°C
                </p>
            </div>
        </div>
    );
}

export default WeatherCard;