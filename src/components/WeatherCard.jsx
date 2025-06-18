// src/components/WeatherCard.jsx
import React from 'react';
import './WeatherCard.css'; // create later

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <p>🌡️ {weather.temp} °C</p>
      <p>💧 Humidity: {weather.humidity}%</p>
      <p>🌬️ Wind: {weather.wind} km/h</p>
    </div>
  );
}

export default WeatherCard;
