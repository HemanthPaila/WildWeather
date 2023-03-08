import "./current-weather.css";
const CurrentWeather = (props) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{props.data.city}</p>
          <p className="weather-description">
            {props.data.weather[0].description}
          </p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${props.data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(props.data.main.temp)}°c</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Deatils</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(props.data.main.feels_like)}°c
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">wind</span>
            <span className="parameter-value">{props.data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{props.data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">pressue</span>
            <span className="parameter-value">
              {props.data.main.pressure} hpa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
