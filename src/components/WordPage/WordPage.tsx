import React, { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import { useSelector } from "react-redux/es/hooks/useSelector";
// components
import { WordCredits } from "./WordCredits";
import { WordMeaning } from "./WordMeaning";
import { WordPhonetic } from "./WordPhonetic";
import { WordTitle } from "./WordTitle";
import { RootReducer } from "../../redux/store";
import { Grid } from "@mui/material";

export const WordPage = () => {
  const dispatch = useDispatch();
  const { wordId } = useParams();
  const { detail } = useSelector((state: RootReducer) => state);

  useEffect(() => {
    dispatch<any>(getDetail(Number(wordId)));
  }, [dispatch, wordId]);

  return (
    <div>
      {detail && (
        <Grid container>
          <WordTitle title={detail[0].word} phonetic={detail[0].phonetic} />
          <WordMeaning meanings={detail[0].meanings} />
          <WordPhonetic phonetics={detail[0].phonetics} />
          <WordCredits
            license={detail[0].license}
            sourceUrls={detail[0].sourceUrls}
          />
        </Grid>
      )}
    </div>
  );
};
