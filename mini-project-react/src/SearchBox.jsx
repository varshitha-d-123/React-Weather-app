// src/SearchBox.jsx
import { useState } from "react";
import { TextField, Button, Snackbar, Alert } from "@mui/material";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");


const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async () => {
    if (!city.trim()) {
      setError("⚠️ Please enter a city name");
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("❌ City not found, please try again");
      }

      const jsonResponse = await response.json();

      const result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMIN: jsonResponse.main.temp_min,
        tempMAX: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      updateInfo(result);
      setError(""); // ✅ clear error on success
    } catch (err) {
      setError(err.message);
      updateInfo(null); // clear old data
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <TextField
        label="City Name *"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        error={Boolean(error) && !city.trim()}
        helperText={!city.trim() && error ? "City name is required" : ""}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "10px" }}
        onClick={getWeather}
      >
        SEARCH
      </Button>

      {/* ✅ Popup Snackbar for errors */}
      <Snackbar
        open={Boolean(error)}
        autoHideDuration={3000}
        onClose={() => setError("")}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" onClose={() => setError("")}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}
