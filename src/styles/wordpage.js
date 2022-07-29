import { Button, Box, Stack, Modal } from "@mui/material";
import { styled } from "@mui/system";

export const WordButtons = styled(Button)`
    margin: .5em 1em;
    background: #d7e9f7;
    color: #191919;
    .icon {
        margin: 0 .5em;
        background-color: #191919;
        color: #f9f7f3;
        border-radius: 5em;
        padding: 0 .5em;
    }
`;

export const StyledBig = styled(Stack)`
    display: flex;
    flex-direction: column;
    margin: .5em;
    padding: 1em;
    color: #191919;
    font-family: "Arial";
    background: #f4d19b;
    border-radius: 2em;
    .meanings{
        background: #f9f7f2;
        border-radius: 2em;
        margin: .5em;
        padding: 1em;
        border: solid 1px #191919;
    }
`;

export const StyledMedium = styled(Stack)`
    margin: .5em;
    padding: 1em;
    color: #191919;
    font-family: "Arial";
    background: #f4d19b;
    border-radius: 2em;
    .phonetics ,.credits{
        background: #f9f7f2;
        border-radius: 2em;
        padding: 1em;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    .phonetic, .license, .credits >div  {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    h5 {
        margin-right: 1em
    }
    a {
        text-decoration: none;
        color: #191919;
        cursor: pointer
    }
`;

export const StyledSmall = styled(Box)`
    p, h6 {
        margin: .5em
    }
`;

export const StyledModal = styled(Box)`
    margin: 4em 2em;
    padding: 1em;
    color: #191919;
    font-family: "Arial";
    background: #f4d19b;
    border-radius: 2em;
    overflow-y: scroll;
    scrollbar-width: thin;
    height: 200;
    .suggestion {
        background: #f9f7f2;
        border-radius: 2em;
        margin: .5em;
        padding: 1em;
        border: solid 1px #191919;
    }
    p, h6 {
        margin: .5em
    }
`;
