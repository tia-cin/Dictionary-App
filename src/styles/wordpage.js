import { Button, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { colorBlue, colorOrange, colorRed, flexRow, styleFonts } from ".";

export const WordButtons = styled(Button)`
  margin: 0.5em 1em;
  background: ${colorBlue} ${styleFonts} .icon {
    margin: 0 0.5em;
    background-color: #191919;
    color: #fff;
    border-radius: 5em;
    padding: 0 0.5em;
  }
`;

export const StyledBig = styled(Stack)`
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  padding: 1em;
  ${styleFonts}
  background: ${colorOrange}
  border-radius: 2em;
  .meanings {
    background: ${colorRed}
    border-radius: 2em;
    margin: 0.5em;
    padding: 1em;
    border: solid 1px #191919;
  }
`;

export const StyledMedium = styled(Stack)`
  margin: 0.5em;
  padding: 1em;
  ${styleFonts}
  background: #f4d19b;
  border-radius: 2em;
  .phonetics,
  .credits {
    background: ${colorRed}
    border-radius: 2em;
    padding: 1em;
    ${flexRow}
    align-items: center;
    justify-content: space-around;
  }
  .phonetic,
  .license,
  .credits > div {
    ${flexRow}
    align-items: center;
    justify-content: space-between;
  }
  h5 {
    margin-right: 1em;
  }
  a {
    text-decoration: none;
    color: #191919;
    cursor: pointer;
  }
`;

export const StyledSmall = styled(Box)`
  p,
  h6 {
    margin: 0.5em;
  }
`;

export const StyledModal = styled(Box)`
  margin: 4em 2em;
  padding: 1em;
  ${styleFonts}
  background: ${colorOrange}
  border-radius: 2em;
  overflow-y: scroll;
  scrollbar-width: thin;
  height: 200;
  .suggestion {
    background: ${colorRed}
    border-radius: 2em;
    margin: 0.5em;
    padding: 1em;
    border: solid 1px #191919;
  }
  p,
  h6 {
    margin: 0.5em;
  }
`;
