import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getAntonyms, getSynonyms } from "../../actions/actions";
import { CardsContainer } from "../Cards/CardsContainer";

export const WordMeaning = ({ meanings }) => {
    const { synonyms, antonyms } = useSelector(state => state);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleSynonyms = (value) => {
    console.log(value)
    dispatch(getSynonyms(value));
    setShow(!show);
  };

  const handleAntonyms = (value) => {
    console.log(value)
    dispatch(getAntonyms(value));
    setShow(!show);
  };

  return (
    <div>
      {meanings &&
        meanings.map((m) => {
          return (
            <section key={Math.random()}>
              <h5>Part of Speech: "{m.partOfSpeech}"</h5>
              <div>
                {m.definitions &&
                  m.definitions.map((d) => {
                    return (
                      <div key={Math.random()}>
                        <div>    
                            {d.definition && (
                            <div>
                                <h6>Definition</h6>
                                <p>{d.definition}</p>
                            </div>
                            )}
                        </div>
                        <div>
                            {d.synonyms &&
                            d.synonyms.map((s) => (
                                <button
                                key={s}
                                onClick={(e) => handleSynonyms(e.target.value)}
                                value={s}
                                >
                                {s}
                                </button>
                            ))}
                            
                        </div>
                        <div>
                            {d.antonyms &&
                            d.antonyms.map((a) => (
                                <button
                                key={a}
                                onClick={(e) => handleAntonyms(e.target.value)}
                                value={a}
                                >
                                {a}
                                </button>
                            ))}
                        </div>
                        {d.example && (
                          <div>
                            <h6>Definition</h6>
                            <p>{d.example}</p>
                          </div>
                        )}
                        
                      </div>
                    );
                  })}
              </div>
            </section>
          );
        })}
        {show && (
                                <CardsContainer words={synonyms || antonyms}/>
                            )}
    </div>
  );
};
