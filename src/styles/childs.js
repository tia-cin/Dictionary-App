import { Alert, Button, Card, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import {
  bigFonts,
  colorBlue,
  colorRed,
  justifyCenter,
  mediaBase,
  smallFonts,
  styleFonts,
} from "./index";

export const StyledTitles = styled(Typography)`
  ${styleFonts}
  font-weight: 500;
  font-size: ${bigFonts};
`;

export const StyledSubtitles = styled(Typography)`
  max-width: 20em;
  font-weight: 400;
  font-size: ${smallFonts} ${styleFonts};
`;

export const LinkButton = styled(Button)`
  padding-right: 1.5em;
  background: ${colorBlue} ${styleFonts} svg {
    width: 1em;
    height: 1em;
    position: absolute;
    transform: translateX(60px);
    margin: 0;
    padding: 0 5px;
    ${mediaBase}
  }
  :hover svg {
    width: 1em;
    opacity: 1;
    transform: translateX(55px);
  }
`;

export const StyledInput = styled(TextField)`
  input {
    padding: 0;
    padding-left: 0.5em;
  }
`;

export const FailedMessage = styled(Alert)`
  display: flex;
  ${justifyCenter}
  margin: 2em 0em;
  padding: 2em;
  background: ${colorRed}
  border-radius: 2em;
  svg {
    font-size: 8em;
  }
  p:last-child {
    ${styleFonts}
    font-size: ${smallFonts}
    font-weight: 500;
  }
`;

export const StyledCard = styled(Card)`
  display: flex;
  ${justifyCenter}
  background: ${colorBlue}
  margin: 1em;
  padding: 1em 2em;
  width: 15%;
  h3 {
    color: white;
    font-size: ${bigFonts};
  }
  h4 {
    color: grey;
  }
`;
