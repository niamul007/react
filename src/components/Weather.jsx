import React from 'react';

function Weather() {
  const [weather, setWeather] = React.useState({
    city: '',
    temperature: '',
    day: '',
    year: '',
    currentDate: '',
    currentTime: '',
    currentDayName: '',
    text:''
  });
  const [input, setInput] = React.useState('');

  function handleInput(event) {
    setInput(event.target.value);
  }

  function weatherApp() {
    if (!input) return; // Don't fetch if input is empty
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${input}&format=json&u=f`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '2e603b8db9mshc3a546255b1d26dp161e49jsn0c2915289a9b',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const city = data.location.city;
        const temperature = data.current_observation.condition.temperature;
        const text= data.current_observation.condition.text;

        const date = new Date(data.current_observation.pubDate * 1000);  // Convert timestamp to Date object
        const day = date.toLocaleString('en-US', { weekday: 'long' });  // Get day name
        const year = date.getFullYear();  // Get year

        const now = new Date();
        const currentDate = now.toLocaleDateString();
        const currentTime = now.toLocaleTimeString();
        const currentDayName = now.toLocaleString('en-US', { weekday: 'long' });

        setWeather({ city, temperature, day, year, currentDate, currentTime, currentDayName , text});  // Set the state with city, temperature, day, year, currentDate, currentTime, and currentDayName
      })
      .catch(error => console.error(error));
  }

  React.useEffect(() => {
    weatherApp();
  }, [input]);

  return (
    <div className='container'>
      <div className="w-box">
        <h3 className='w-title'>Weather App</h3>
        <div className="location">
          <p className="loc">Location: {weather.city}</p>
          <div className="search">
            <input 
              type="search" 
              name="city" 
              id="in-field" 
              placeholder='Enter city' 
              value={input} 
              onChange={handleInput} 
            />
            <button 
              type="submit" 
              className='btn' 
              onClick={weatherApp}
            >
              Set
            </button>
          </div>
          <div className="w-result">
            <img src={weather.text==='clear'? 'sun.png':'clouds.png'} alt="sun img" />
            <div className="w-condition">
              <p className="celcius">{weather.temperature}°F</p>  {/* Display temperature */}
              <p className="w-state">{weather.text}</p>
              <p className="date-time">{weather.day}, {weather.year}</p>  {/* Display day and year */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
