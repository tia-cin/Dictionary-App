import React, { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { getDetail } from "../redux/actions";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  WordCredits,
  WordMeaning,
  WordPhonetic,
  WordTitle,
} from "../components";
import { RootReducer } from "../redux/store";
import { Grid } from "@mui/material";

export const WordPage: React.FC = () => {
  const dispatch = useDispatch();
  const { wordId } = useParams();
  const { detail } = useSelector((state: RootReducer) => state);

  useEffect(() => {
    dispatch<any>(getDetail(Number(wordId)));
  }, [dispatch, wordId]);

  return (
    <div className="h-screen pt-20">
      {detail && (
        <div className="flex flex-col items-center justify-center">
          <WordTitle title={detail[0].word} phonetic={detail[0].phonetic} />
          <WordMeaning meanings={detail[0].meanings} />
          <WordPhonetic phonetics={detail[0].phonetics} />
          <WordCredits
            license={detail[0].license}
            sourceUrls={detail[0].sourceUrls}
          />
        </div>
      )}
    </div>
  );
};
