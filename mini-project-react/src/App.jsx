import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./App.css";

export default function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  let updateInfo = (newInfo) => {
    console.log("Weather Data from API:", newInfo); // ✅ console log will work
    setWeatherInfo(newInfo);
  };

  return (
    <div className="app-container">
      <h2 className="title">Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox weatherInfo={weatherInfo} />
    </div>
  );
}
