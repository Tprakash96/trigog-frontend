import axios from 'axios';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSubmit = () => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`)
      .then((res) => setWeather(res.data));
  }

  return (
    <div className="App">
      <input onChange={(e) => setCity(e.target.value)} value={city} />
      <button onClick={handleSubmit} >Submit</button>

      {
        weather &&
        <div style={{ padding: "10px" }}>
          <h1>Weather Report</h1>
          <div>Weather : {weather.weather[0].main}</div>
          <div>humidity : {weather.main.humidity}</div>
          <div>pressure : {weather.main.pressure}</div>
          <div>windSpeed : {weather.wind.speed}</div>
        </div>

      }
    </div>
  );
}

export default App;
