import React from "react";
import { StyledSubtitles, StyledTitles } from "../../styles/childs";

export const WordTitle = ({ title, phonetic }) => {
    return (
        <div>
            <StyledTitles>{title}</StyledTitles>
            <StyledSubtitles>{phonetic}</StyledSubtitles>
        </div>
    )
};