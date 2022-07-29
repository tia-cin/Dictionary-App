import { Button, Box, Stack } from "@mui/material";
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
    background: #f9f7f2;
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
    
`;

export const StyledSmall = styled(Box)`
    p, h6 {
        margin: .5em
    }
`;
