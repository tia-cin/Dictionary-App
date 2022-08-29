import React from "react";
import { Link } from "react-router-dom";
// MUI
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const Landing: React.FC = () => {
  return (
    <div>
      <div>
        <div>Welcome to our Dictionary</div>
      </div>
      <div>
        <div>
          Search any word and find it's definitions, pronunciation and more
        </div>
      </div>
      <div>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <div>
            Get Started
            <KeyboardArrowRightIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};
