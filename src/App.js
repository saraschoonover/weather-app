//import WeatherItem from './components/WeatherItem';
import './App.css';
import Weather from './components/Weather';
import WeatherForm from './components/WeatherForm/WeatherForm';

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
      <WeatherForm/>
    </div>
  );
}

export default App;
