import React, { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions/actions";
import { useSelector } from "react-redux/es/hooks/useSelector";
// components
import { WordCredits } from "./WordCredits";
import { WordMeaning } from "./WordMeaning";
import { WordPhonetic } from "./WordPhonetic";
import { WordTitle } from "./WordTitle";

export const WordPage = () => {
    const dispatch = useDispatch();
    const { wordId } = useParams();
    const { detail } = useSelector(state => state);

    useEffect(()=> {
        dispatch(getDetail(wordId))
    }, [dispatch, wordId]);

    return (
        <div>
            {
                detail && detail.map(w => {
                    return(
                        <div key={w.id}>
                            <WordTitle title={w.word} phonetic={w.phonetic}/>
                            <WordMeaning meanings={w.meanings} />
                            <WordPhonetic phonetics={w.phonetics}/>
                            <WordCredits license={w.license} sourceUrls={w.sourceUrls}/>
                        </div>
                    )
                })
            }
        </div>
    )
};