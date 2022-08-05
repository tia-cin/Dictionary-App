import { Box, Container, Grid, List } from "@mui/material";
import { styled } from "@mui/system";
import {
  colorBlue,
  colorOrange,
  extraSmallFonts,
  flexRow,
  mediaBase,
  smallFonts,
  styleFonts,
} from "./index";

export const StyledContainer = styled(Container)`
  transform: translateY(10em);
  justify-content: center;
  align-self: center;
`;

export const StyledBox = styled(Box)`
  margin: 1.5em;
  ${flexRow}
  justify-content: center;
  align-self: center;
`;

export const StyledFooter = styled(Box)`
  ${flexRow}
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: #191919;
    cursor: pointer;
  }
`;

export const StyledList = styled(List)`
  ${flexRow}
  .item {
    display: flex;
    flex-direction: column;
    padding: 0 0.5em;
  }
  a {
    text-decoration: none;
  }
  .tech {
    ${flexRow}
    align-items: center;
    background: ${colorBlue}
    padding-right: 0.8em;
    border-radius: 5em;
    ${styleFonts}
    font-size: ${extraSmallFonts}
    font-weight: 600;
    ${mediaBase}
  }
  .tech svg {
    width: 1em;
    height: 1em;
    padding: 0;
  }
  .item:hover .tech {
    opacity: 1;
    transform: translateY(1px);
  }
`;

export const StyledNavbar = styled(Box)`
  ${flexRow}
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0px;
  right: 0px;
  background: ${colorOrange}
  ${styleFonts}
  font-size: ${smallFonts}
  font-weight: 600;
`;

export const StyledForm = styled(Box)`
  ${flexRow}
  form {
    ${flexRow}
  }
  form > svg {
    cursor: pointer;
  }
  #intruction {
    ${flexRow}
    align-items: center;
    margin-right: 0.5em;
    background: ${colorBlue}
    padding-left: 0.8em;
    border-radius: 5em;
    ${styleFonts}
    font-size: ${extraSmallFonts}
    font-weight: 600;
    ${mediaBase}
  }
  #intruction > svg {
    width: 1em;
    height: 0.5em;
    padding: 0;
  }
  :hover #intruction {
    opacity: 1;
    transform: translateY(1px);
  }
`;

export const StyledCardContainer = styled(Grid)`
  margin: 5em 3em;
  a {
    text-decoration: none;
  }
`;
