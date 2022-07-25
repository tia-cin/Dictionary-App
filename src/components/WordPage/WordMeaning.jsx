import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getAntonyms, getSynonyms } from "../../actions/actions";
import { Suggestions } from "../Cards/Suggestions";

export const WordMeaning = ({ meanings }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleSynonyms = (value) => {
    dispatch(getSynonyms(value));
    setShow(!show);
  };

  const handleAntonyms = (value) => {
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
      {show && <Suggestions />}
    </div>
  );
};
