import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Typography, Box, Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Weather from "./Weather";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState([]);
  const [weatherOpen, setWeatherOpen] = useState(false);
  const currentDate = new Date();
  const navigate = useNavigate();
  const options = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  };

  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  if (!isAuthenticated) {
    // Redirect to a login page or display a message for unauthenticated users
    navigate("/");
    return null;
  }
  const onChangeCity = (event) => {
    setCity(event.target.value);
  };
  const fetchWeatherData = async () => {
    try {
      const apiKey = "f1f9f813816a1ca40933d43f24b963aa"; // Replace with your OpenWeather API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      const response = await axios.get(url);
      const weatherData = response.data;

      setWeatherOpen(true);
      // Process the weather data as needed
      setSelectedCity(weatherData);
      console.log(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  return (
    <div>
      <Navbar />
      {weatherOpen === false ? (
        <>
          <Box
            gridArea={1}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              padding: "100px", // Increased padding
              margin: "50px", // Increased margin
              textAlign: "center", // Center align text
            }}
          >
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant="h5">{user?.name}</Typography>
                <Typography variant="h5">{user?.nickname}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Enter City"
                  variant="outlined"
                  name="city"
                  onChange={onChangeCity}
                  value={city}
                  type="text"
                  autoComplete="off"
                  sx={{
                    width: "300px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" onClick={fetchWeatherData}>
                  Display Weather
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box
            gridArea={1}
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
              padding: "10px", // Increased padding
              margin: "50px", // Increased margin
              textAlign: "center", // Center align text
            }}
          >
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Enter City"
                  variant="outlined"
                  name="city"
                  onChange={onChangeCity}
                  value={city}
                  type="text"
                  autoComplete="off"
                  sx={{
                    width: "300px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" onClick={fetchWeatherData}>
                  Display Weather
                </Button>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        <Weather
          selectWeather={selectedCity}
          setWeatherOpen={setWeatherOpen}
          formattedDate={formattedDate}
        />
      )}
    </div>
  );
};

export default Home;
