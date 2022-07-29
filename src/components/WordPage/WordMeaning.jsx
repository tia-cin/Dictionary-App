import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getAntonyms, getSynonyms } from "../../actions/actions";
// components
import { Suggestions } from "../Cards/Suggestions";
// styles
import { WordButtons, StyledBig, StyledSmall } from "../../styles/wordpage";
// MUI
import { Modal } from '@mui/material';

export const WordMeaning = ({ meanings }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSynonyms = (value) => {
    dispatch(getSynonyms(value));
    setShow(!show);
  };

  const handleAntonyms = (value) => {
    dispatch(getAntonyms(value));
    setShow(!show);
  };

  return (
    <StyledBig>
      <h2>Meanings</h2>
      {meanings &&
        meanings.map((m) => {
          return (
            <div key={Math.random()} className="meanings">
              <h3>Part of Speech: "{m.partOfSpeech}"</h3>
              <div>
                {m.definitions &&
                  m.definitions.map((d) => {
                    return (
                      <div key={Math.random()} className="definitions">
                        {d.definition && (
                          <StyledSmall className="definition">
                            <p>Definition</p>
                            <h6>{d.definition}</h6>
                          </StyledSmall>
                        )}
                        {d.synonyms && (
                          <StyledSmall className="synonyms">
                            {d.synonyms &&
                              d.synonyms.map((s) => (
                                <WordButtons
                                  key={s}
                                  onClick={(e) => {
                                    handleSynonyms(e.target.value); 
                                    handleOpen()
                                  }}
                                  value={s}
                                  variant="contained"
                                >
                                  {s}
                                  <span className="synonym icon">S</span>
                                </WordButtons>
                              ))}
                          </StyledSmall>
                        )}
                        {d.antonyms && (
                          <StyledSmall className="antonyms">
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
                          </StyledSmall>
                        )}
                        {d.example && (
                          <StyledSmall className="examples">
                            <p>Examples</p>
                            <h6>{d.example}</h6>
                          </StyledSmall>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      <Modal open={show} onClose={handleClose}>
        <Suggestions/>
      </Modal>
    </StyledBig>
  );
};
