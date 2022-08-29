import React from "react";
import { Link } from "react-router-dom";
// styles
import { StyledTitles, StyledSubtitles, LinkButton } from "../styles/childs";
import { StyledBox, StyledContainer } from "../styles/containers";
// MUI
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const Landing = () => {
  return (
    <StyledContainer>
      <StyledBox>
        <StyledTitles sx={{ fontSize: 40, fontWeight: 600 }}>
          Welcome to our Dictionary
        </StyledTitles>
      </StyledBox>
      <StyledBox>
        <StyledSubtitles sx={{ fontSize: 20 }}>
          Search any word and find it's definitions, pronunciation and more
        </StyledSubtitles>
      </StyledBox>
      <StyledBox>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <LinkButton>
            Get Started
            <KeyboardArrowRightIcon />
          </LinkButton>
        </Link>
      </StyledBox>
    </StyledContainer>
  );
};
