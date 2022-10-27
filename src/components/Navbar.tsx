import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full top-0">
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
