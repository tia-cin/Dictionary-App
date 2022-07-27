import React from "react";
import { Card } from "./Card";
import { FailedMessage, StyledTitles, StyledSubtitles } from "../../styles/styles";

export const CardsContainer = ({words}) => {
    return (
        <main>
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
                        <StyledTitles>{words.title}</StyledTitles>
                        <StyledSubtitles>{words.message}</StyledSubtitles>
                        <p>{words.resolution}</p>
                    </FailedMessage>
            }
        </main>
    )
};