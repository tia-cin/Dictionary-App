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
                                            {d.definition && <div><h6>Definition</h6><p>{d.definition}</p></div>}
                                            {d.synonyms && d.synonyms.map(s => <span>{s}</span>)}
                                            {d.antonyms && d.antonyms.map(a => <span>{a}</span>)}
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