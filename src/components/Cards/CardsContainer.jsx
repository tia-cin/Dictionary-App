import React, { useState } from "react";
import { Card } from "./Card";
import { FailedMessage, StyledTitles, StyledSubtitles, StyledCardContainer } from "../../styles/styles";
import ReportIcon from '@mui/icons-material/Report';

export const CardsContainer = ({words}) => {
    return (
        <StyledCardContainer container spacing={2}>
            {console.log("cards", words)}
            {
                Array.isArray(words) ? 
                    words.map((w, i) => {
                        return (
                            <Card key={i} word={w} />
                        )
                    })
                :
                    <FailedMessage>
                        <ReportIcon sx={{fontSize: "5em"}}/>
                        <div className="message">
                            <StyledTitles>{words.title}</StyledTitles>
                            <StyledSubtitles>{words.message}</StyledSubtitles>
                            <p>{words.resolution}</p>
                        </div>
                    </FailedMessage>
            }
        </StyledCardContainer>
    )
};