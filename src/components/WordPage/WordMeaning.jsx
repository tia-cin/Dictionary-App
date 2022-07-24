import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getAntonyms, getSynonyms } from "../../actions/actions";

export const WordMeaning = ({ meanings }) => {
    const [antonyms, setAntonyms] = useState([]);
    const [synonyms, setSynonyms] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSynonyms(synonyms));
        dispatch(getAntonyms(antonyms));
    }, [dispatch]);

    return(
        <div>
            {
                meanings && meanings.map(m => {
                    return (
                        <section key={Math.random()}>
                            <h5>{m.partOfSpeech}</h5>
                            <div>
                                {m.definitions && m.definitions.map(d => {
                                    return(
                                        <div key={Math.random()}>
                                            {d.definition && <div><h6>Definition</h6><p>{d.definition}</p></div>}
                                            {d.synonyms && setSynonyms(d.synonyms)}
                                            {d.antonyms && setAntonyms(d.antonyms)}
                                            {d.example && <div><h6>Definition</h6><p>{d.example}</p></div>}
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                    )
                })
            }
        </div>
    )
};