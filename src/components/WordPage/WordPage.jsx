import React from "react";
import { WordCredits } from "./WordCredits";
import { WordMeaning } from "./WordMeaning";
import { WordPhonetic } from "./WordPhonetic";
import { WordTitle } from "./WordTitle";

export const WordPage = ({ word }) => {
    return (
        <div>
            <WordTitle title={word.word} phonetic={word.phonetic}/>
            <WordMeaning meaning={word.meaning}/>
            <WordPhonetic phonetic={word.phonetics}/>
            <WordCredits license={word.license} sourceUrl={word.sourceUrl}/>
        </div>
    )
};