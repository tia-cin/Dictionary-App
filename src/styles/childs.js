import { Alert, Button, Card, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

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

export const StyledInput = styled(TextField)`
    input { 
        padding: 0;
        padding-left: .5em
    };
`;

export const FailedMessage = styled(Alert)`
    display: flex;
    justify-content: center;
    margin: 2em 0em;
    padding: 2em;
    background: #f9bc9f;
    border-radius: 2em;
    svg {
        font-size: 8em;
    }
    p:last-child {
        color: #191919;
        font-family: "Arial";
        font-size: .8em;
        font-weight: 500;
    }
`;

export const StyledCard = styled(Card)`
    display: flex;
    justify-content: center;
    background: #d7e9f7;
    margin: 1em;
    padding: 1em 2em;
    width: 15%;
    h3 {
        color: white;
        font-size: 2em;
    }
    h4 {
        color: grey
    }
`;