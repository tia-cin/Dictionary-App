import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image.png";
import { Button } from "@mui/material";

export const Landing: React.FC = () => {
  return (
    <div className="flex justify-center items-center mx-5 h-screen">
      <div className="text-center w-650">
        <span className="text-lg font-medium">Hello there!</span>
        <h1 className="font-semibold text-6xl">Welcome to Dictionary</h1>
        <p className="text-lg mt-3 lg:w-3/4">
          Get word definitions and learn about their use with example,
          pronunciation, synonyms, antonyms and more
        </p>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button size="large" variant="contained" sx={{ marginTop: "5em" }}>
            Get Started
          </Button>
        </Link>
      </div>
      <div className="md:hidden mx-5 px-5">
        <img src={image} alt="svg" width="350" />
      </div>
    </div>
  );
};
