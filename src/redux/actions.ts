import { ThunkAction } from "redux-thunk";
import {
  Actions,
  GET_ANTONTMS,
  GET_DETAIL,
  GET_SYNONYMS,
  SEARCH_WORD,
} from "../types";
import { RootReducer } from "./store";

const axios = require("axios");

const apiCall = async (input: string) => {
  try {
    const req = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
    );
    let res =
      (await req.data) &&
      req.data.map((r: any) => {
        return {
          word: r.word,
          phonetic: r.phonetic ? r.phonetic : null,
          phonetics: r.phonetics ? r.phonetics : null,
          origin: r.origin ? r.origin : null,
          meanings: r.meanings ? r.meanings : null,
          license: r.license ? r.license : null,
          sourceUrls: r.sourceUrls ? r.sourceUrls : null,
          id: Math.floor(Math.random() * 100000) + 1,
        };
      });
    return res;
  } catch (error: any) {
    return error.response.data;
  }
};

export const searchWords = (
  input: string
): ThunkAction<void, RootReducer, null, Actions> => {
  return async (dispatch) => {
    try {
      let res = await apiCall(input);
      return dispatch({
        type: SEARCH_WORD,
        payload: res,
      });
    } catch (e: any) {
      console.log(e.message);
    }
  };
};

export const getDetail = (
  id: number
): ThunkAction<void, RootReducer, null, Actions> => {
  return (dispatch) => {
    return dispatch({
      type: GET_DETAIL,
      payload: id,
    });
  };
};

export const getSynonyms = (
  synonym: string
): ThunkAction<void, RootReducer, null, Actions> => {
  return async (dispatch) => {
    try {
      let res = await apiCall(synonym);
      return dispatch({
        type: GET_SYNONYMS,
        payload: res,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getAntonyms = (
  antonym: string
): ThunkAction<void, RootReducer, null, Actions> => {
  return async (dispatch) => {
    try {
      let res = await apiCall(antonym);
      return dispatch({
        type: GET_ANTONTMS,
        payload: res,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
