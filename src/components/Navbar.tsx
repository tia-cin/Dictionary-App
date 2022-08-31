import React from "react";
import { Link } from "react-router-dom";
// MUI
import { Button, Grid } from "@mui/material";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <Grid
        container
        justifyContent="space-between"
        sx={{ backgroundColor: "#d7e9f7", px: ".5em", py: "1em" }}
      >
        <Grid item>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button size="small" sx={{ mx: "1em" }}>
              Dictionary
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button size="small" sx={{ mx: "1em" }}>
              Home
            </Button>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button size="small" sx={{ mx: "1em" }}>
              About
            </Button>
          </Link>
        </Grid>
      </Grid>
    </nav>
  );
};
