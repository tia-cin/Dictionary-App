import React from "react";
import { Link } from "react-router-dom";
import { StyledCard } from "../../styles/styles";

export const Card = ({ word }) => {
    return (
        <StyledCard>
            <Link to={`/definitions/${word.id}`}>
                <h3>
                    {word.word}
                </h3>
                <h4>{word.phonetic ? word.phonetic : null}</h4>
            </Link>
        </StyledCard>
    )
};