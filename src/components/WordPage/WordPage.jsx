import React from "react";
import { WordCredits } from "./WordCredits";
import { WordMeaning } from "./WordMeaning";
import { WordPhonetic } from "./WordPhonetic";
import { WordTitle } from "./WordTitle";

export const WordPage = ({ word }) => {
    return (
        <div>
            <WordTitle/>
            <WordMeaning/>
            <WordPhonetic/>
            <WordCredits/>
        </div>
    )
};