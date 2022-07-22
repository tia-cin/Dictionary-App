import React, { useEffect } from "react";
import { WordCredits } from "./WordCredits";
import { WordMeaning } from "./WordMeaning";
import { WordPhonetic } from "./WordPhonetic";
import { WordTitle } from "./WordTitle";
import { useParams } from "react-router-dom";

export const WordPage = ({words}) => {
    const { wordId } = useParams();
    let response = words.filter(w => w.id === Number(wordId));

    return (
        <div>
            {console.log("word page", response, "wordId", wordId)}
            {
                response && response.map(w => {
                    return(
                        <div key={Math.random()}>
                            <WordTitle title={w.word} phonetic={w.phonetic}/>
                             <WordMeaning meanings={w.meanings}/>
                            {/*<WordPhonetic phonetic={w.phonetics}/>
                            <WordCredits license={w.license} sourceUrl={w.sourceUrl}/> */}
                        </div>
                    )
                })
            }
        </div>
    )
};