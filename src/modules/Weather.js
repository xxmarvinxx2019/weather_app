import React from "react";
import { Box, Button, Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Weather = ({ selectWeather, setWeatherOpen, formattedDate }) => {
  const back = () => {
    setWeatherOpen(false);
  };
  console.log(selectWeather.cod);
  return (
    <div>
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
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Date (mm/dd/yyyy)</TableCell>
                    <TableCell align="right">Temp(f)</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Main</TableCell>
                    <TableCell align="right">Pressure</TableCell>
                    <TableCell align="right">Humidity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    key={selectWeather?.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {formattedDate}
                    </TableCell>
                    <TableCell align="right">
                      {selectWeather?.main?.temp}
                    </TableCell>
                    <TableCell align="right">
                      {selectWeather?.weather[0]?.description}
                    </TableCell>
                    <TableCell align="right">
                      {selectWeather?.weather[0]?.main}
                    </TableCell>
                    <TableCell align="right">
                      {selectWeather?.main?.pressure}
                    </TableCell>
                    <TableCell align="right">
                      {selectWeather?.main?.humidity}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={back}>
              Back
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
            <TableContainer component={Paper}>
              <Table
                //sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Date (mm/dd/yyyy)</TableCell>
                    <TableCell align="right">Temp(f)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    key={selectWeather?.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {formattedDate}
                    </TableCell>
                    <TableCell align="right">
                      {selectWeather?.main?.temp}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={back}>
              Back
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Weather;
