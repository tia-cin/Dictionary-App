import { Box, Button, Container, List, TextField, Typography } from "@mui/material";
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

export const StyledFooter = styled(Box)`
      display: flex;
      flex-direction: row;
      position: fixed;
      bottom: 0px;
      left: 0px;
      right: 0px;
      justify-content: space-around;
`;

export const StyledList = styled(List)`
      display: flex;
      flex-direction: row;
      .item {
        display: flex;
        flex-direction: column;
        padding: 0 .5em;
      }
      a {
        text-decoration: none
      }
      span {
        background: #d7e9f7;
        padding: .5em;
        border-radius: 5em;
        color: #191919;
        font-family: "Arial";
        font-size: .6em;
        font-weight: 600;
        opacity: 0;
        -webkit-transition: all .25s cubic-bezier(.14, .59, 1, 1.01);
        transition: all .15s cubic-bezier(.14, .59, 1, 1.01);
      }
      .item:hover span {
        opacity: 1;
        transform: translateY(1px);
      }
`;

export const StyledNavbar = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: fixed; 
    top: 0;
    left: 0px;
    right: 0px;
    background: #f4d19b;
    color: #191919;
    font-family: "Arial";
    font-size: .8em;
    font-weight: 600;
`;

export const StyledInput = styled(TextField)`
    input {padding: 0};
`;

export const StyledForm = styled(Box)`
    display: flex;
    flex-direction: row;
    form {
        display: flex;
        flex-direction: row;
    }
    #intruction {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: .5em;
        background: #d7e9f7;
        padding-left: .8em;
        border-radius: 5em;
        color: #191919;
        font-family: "Arial";
        font-size: .6em;
        font-weight: 600;
        opacity: 0;
        -webkit-transition: all .25s cubic-bezier(.14, .59, 1, 1.01);
        transition: all .15s cubic-bezier(.14, .59, 1, 1.01);
    }
    #intruction >svg {
        width: 1em;
        height: .5em;
        padding: 0
    }
    :hover #intruction{
        opacity: 1;
        transform: translateY(1px);
    }
`;