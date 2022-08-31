import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image.png";
// MUI
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button, Grid, Typography } from "@mui/material";

export const Landing: React.FC = () => {
  return (
    <Grid container sx={{ my: "10em" }}>
      <Grid item>
        <Grid item sx={{ mx: "5em", my: "2em" }}>
          <Typography variant="h2" sx={{ mb: "1em" }}>
            Welcome to Dictionary
          </Typography>
          <Typography variant="h5">
            Get word definitions and learn about their use
            <br />
            with example, pronunciation, synonyms, antonyms
            <br />
            and more
          </Typography>
        </Grid>
        <Grid item sx={{ mx: "5em" }}>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button size="large">
              Get Started
              <KeyboardArrowRightIcon />
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid item sx={{ mx: "5em" }}>
        <img src={image} alt="svg" width="350" />
      </Grid>
    </Grid>
  );
};
