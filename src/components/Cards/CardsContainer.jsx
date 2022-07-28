import React from "react";
import { Card } from "./Card";
import { StyledCardContainer } from "../../styles/containers";
import { FailedMessage, StyledTitles, StyledSubtitles } from "../../styles/childs";

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
                    <FailedMessage severity="error">
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