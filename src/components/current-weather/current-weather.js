import "./current-weather.css";
const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">begium</p>
          <p className="weather-description">sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <p className="temperature">18c</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Deatils</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">22c</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">pressue</span>
            <span className="parameter-value">15 hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
