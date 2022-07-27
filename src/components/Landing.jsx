import React from "react";
import { Link } from "react-router-dom";
import { StyledBox, StyledTitles, StyledSubtitles, LinkButton, StyledContainer } from "../styles/styles"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const Landing = () => {
  return (
      <StyledContainer>
        <StyledBox>
          <StyledTitles>Welcome to our Dictionary</StyledTitles>
        </StyledBox>
        <StyledBox>
          <StyledSubtitles>
            Search any word and find it's definitions, pronunciation and more
          </StyledSubtitles>
        </StyledBox>
        <StyledBox>
          <Link to="/home" style={{ textDecoration: "none"}}>
            <LinkButton>Get Started
              <KeyboardArrowRightIcon/>
            </LinkButton>
          </Link>
        </StyledBox>
      </StyledContainer>
  );
};
