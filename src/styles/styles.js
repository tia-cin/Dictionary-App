import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StyledContainer = styled(Container)`
    transform: translateY(10em);
    diplay: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
`;

export const StyledBox = styled(Box)`
    margin: 1.5em;
`;

export const StyledTitles = styled(Typography)`
    font-weight: 500;
    font-size: 2rem;
    font-family: "Arial";
    color: #191919;
`;

export const StyledSubtitles = styled(Typography)`
    max-width: 20em; 
    font-weight: 400;
    font-size: 1.2rem;
    font-family: "Arial";
    color: #191919;
`;

export const LinkButton = styled(Button)`
    padding-right: 1.5em;
    background: #d7e9f7;
    color: #191919;
    svg {
        width: 1em;
        height: 1em;
        position: absolute;
        transform: translateX(60px);
        opacity: 0;
        -webkit-transition: all .25s cubic-bezier(.14, .59, 1, 1.01);
        transition: all .15s cubic-bezier(.14, .59, 1, 1.01);
        margin: 0;
        padding: 0 5px;
      }
      :hover svg {
        width: 1em;
        opacity: 1;
        transform: translateX(55px);
      }
`;