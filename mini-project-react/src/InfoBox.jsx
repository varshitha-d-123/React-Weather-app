// src/InfoBox.jsx
import { Card, CardContent, Typography } from "@mui/material";

export default function ({ weatherInfo }) {
  if (!weatherInfo) return null;

  let imgUrl = "";
  let emoji = "";

  // 🌦️ Choose image + emoji based on condition
  if (weatherInfo.weather.includes("rain")) {
    imgUrl =
      "https://static.vecteezy.com/system/resources/thumbnails/042/146/565/small/ai-generated-beautiful-rain-day-view-photo.jpg"; // Rainy
    emoji = "🌧️";
  } else if (weatherInfo.temp <= 10) {
    imgUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRes-ptHN9PQA3U6gA-IA0zDsg8SfigfQaw&s"; // Cold/Snow
    emoji = "❄️";
  } else if (weatherInfo.temp > 10 && weatherInfo.temp <= 20) {
    imgUrl =
      "https://assets.cntraveller.in/photos/67d9589d776f75ba23d7b7a4/16:9/w_1280,c_limit/lead.jpeg"; // Cool
    emoji = "🍂";
  } else if (weatherInfo.temp > 20 && weatherInfo.temp <= 30) {
    imgUrl =
      "https://en.aravot.am/wp-content/uploads/2021/05/spring-52664.jpg"; // Pleasant/Moderate
    emoji = "🌤️";
  } else if (weatherInfo.temp > 30 && weatherInfo.temp <= 37) {
    imgUrl =
      "https://www.wkbn.com/wp-content/uploads/sites/48/2021/06/sun-sunny-heat-hot-summer-weather-generic.jpg?w=1280"; // Hot
    emoji = "☀️";
  } else {
    imgUrl =
      "https://thumbs.dreamstime.com/b/hot-weather-25574291.jpg"; // Very Hot
    emoji = "🔥";
  }

  return (
    <Card
      sx={{
        mt: 3,
        p: 2,
        borderRadius: 3,
        boxShadow: 3,
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <img
        src={imgUrl}
        alt="Weather"
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {weatherInfo.city} {emoji}
        </Typography>
        <Typography variant="body1">🌡️ Temp: {weatherInfo.temp}°C</Typography>
        <Typography variant="body1">
          🔽 Min: {weatherInfo.tempMIN}°C | 🔼 Max: {weatherInfo.tempMAX}°C
        </Typography>
        <Typography variant="body1">💧 Humidity: {weatherInfo.humidity}%</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Feels like {weatherInfo.feelsLike}°C, {weatherInfo.weather}.
        </Typography>
      </CardContent>
    </Card>
  );
}
