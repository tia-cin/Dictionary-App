import React from "react";
import { Link } from "react-router-dom";
// components
import { SearchBar } from "./SearchBar";
// styles
import { StyledNavbar } from "../../styles/containers";
import { StyledTitles } from "../../styles/childs";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <div>
        <Link to="/home">
          <StyledTitles>Dictionary</StyledTitles>
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>
    </StyledNavbar>
  );
};
