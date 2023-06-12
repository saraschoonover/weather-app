import Card from "./UI/Card"
import WeatherItem from "./WeatherItem"

function Weather(props) {

  return (
    <Card className="Weather">
      <WeatherItem
        city={props.items[0].city}
        state={props.items[0].state}
        mood={props.items[0].mood}
      />
      <WeatherItem
        city={props.items[1].city}
        state={props.items[1].state}
        mood={props.items[1].mood}
      />
      <WeatherItem
        city={props.items[2].city}
        state={props.items[2].state}
        mood={props.items[2].mood}
      />
    </Card>
  )
}

export default Weather
