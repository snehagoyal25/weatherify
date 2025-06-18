import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';

function App() {
  const sampleWeather = {
    city: "Delhi",
    temp: 32,
    humidity: 70,
    wind: 12
  };

  return (
    <div className="app">
      <h1>Weather App ☁️</h1>
      <WeatherCard weather={sampleWeather} />
    </div>
  );
}

export default App;
