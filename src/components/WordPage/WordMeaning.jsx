import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getAntonyms, getSynonyms } from "../../actions/actions";
import { WordButtons, StyledMedium } from "../../styles/wordpage";
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
    <StyledMedium>
      {meanings &&
        meanings.map((m) => {
          return (
            <div key={Math.random()} className="meanings">
              <h5>Part of Speech: "{m.partOfSpeech}"</h5>
              <div>
                {m.definitions &&
                  m.definitions.map((d) => {
                    return (
                      <div key={Math.random()} className="definitions">
                        {d.definition && (
                          <div className="definition">
                            <p>Definition</p>
                            <h6>{d.definition}</h6>
                          </div>
                        )}
                        {d.synonyms && (
                          <div className="synonyms">
                            {d.synonyms &&
                              d.synonyms.map((s) => (
                                <WordButtons
                                  key={s}
                                  onClick={(e) =>
                                    handleSynonyms(e.target.value)
                                  }
                                  value={s}
                                  variant="contained"
                                >
                                  {s}
                                  <span className="synonym icon">S</span>
                                </WordButtons>
                              ))}
                          </div>
                        )}
                        {d.antonyms && (
                          <div className="antonyms">
                            {d.antonyms &&
                              d.antonyms.map((a) => (
                                <WordButtons
                                  key={a}
                                  onClick={(e) =>
                                    handleAntonyms(e.target.value)
                                  }
                                  value={a}
                                  variant="contained"
                                >
                                  {a}
                                  <span className="antonym icon">A</span>
                                </WordButtons>
                              ))}
                          </div>
                        )}
                        {d.example && (
                          <div className="examples">
                            <p>Examples</p>
                            <h6>{d.example}</h6>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      {show && <Suggestions />}
    </StyledMedium>
  );
};
