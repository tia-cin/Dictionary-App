import React from "react";

export const WordMeaning = ({ meanings }) => {
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
                                            <p>{d.definition}</p>
                                            {d.synonyms && d.synonyms.map(s => <span>{s}</span>)}
                                            {d.antonyms && d.antonyms.map(a => <span>{a}</span>)}
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