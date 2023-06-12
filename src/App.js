//import WeatherItem from './components/WeatherItem';
import './App.css';
import Weather from './components/Weather';

function App() {
  const weather = [
    {
      city: 'Philadelphia',
      state: 'Pennsylvania',
      mood: 'Overcast'
    },
    {
      city: 'Toledo',
      state: 'Ohio',
      mood: 'Sunny'
    },
    {
      city: 'Buffalo',
      state: 'New York',
      mood: 'Storms'
    }

  ]
  return (
    <div className="App">
       <div>
     <h2>THE WEATHER</h2>
     </div>
      <Weather items={weather}/>
    </div>
  );
}

export default App;
