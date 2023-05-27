import React from "react";
import Navbar from "../components/navbar";
import { Typography, Box, Button, Grid } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const Landing = () => {
  const { loginWithRedirect } = useAuth0();
  const handleLogin = () => {
    loginWithRedirect({
      returnTo: "/home",
    });
  };
  return (
    <div>
      <Navbar />
      <Box
        gridArea={1}
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          padding: "100px", // Increased padding
          margin: "50px", // Increased margin
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h5">
              Welcome to the weather forecast application. Please login with
              your Github account to use the application and view the weather in
              your city.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={() => loginWithRedirect()}>
              Login
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
          padding: "30px",
          margin: "30px",
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h5">
              Welcome to the weather forecast application. Please login with
              your Github account to use the application and view the weather in
              your city.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={() => loginWithRedirect()}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Landing;
