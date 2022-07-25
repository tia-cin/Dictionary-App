export const SEARCH_WORD = "SEARCH_WORD";
export const GET_DETAIL = "GET_DETAIL";
export const GET_SYNONYMS = "GET_SYNONYMS";
export const GET_ANTONTMS = "GET_ANTONTMS";

const axios = require("axios");

const apiCall = async (input) => {
    const req = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
    );
    let res =
        (await req.data) &&
        req.data.map((r) => {
        return {
            word: r.word,
            phonetic: r.phonetic ? r.phonetic : null,
            phonetics: r.phonetics ? r.phonetics : null,
            origin: r.origin ? r.origin : null,
            meanings: r.meanings ? r.meanings : null,
            license: r.license ? r.license : null,
            sourceUrls: r.sourceUrls ? r.sourceUrls : null,
            id: Math.random(),
        };
        });
        return res
}

export const searchWords = (input) => {
  return async (dispatch) => {
    try {
      let res = await apiCall(input);
      return dispatch({
        type: SEARCH_WORD,
        payload: res,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const getDetail = (id) => {
  return (dispatch) => {
    return dispatch({
      type: GET_DETAIL,
      payload: id,
    });
  };
};

export const getSynonyms = (synonym) => {
  return async (dispatch) => {
    try {
        let res = await apiCall(synonym)
                return dispatch({
                  type: GET_SYNONYMS,
                  payload: res,
                });
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const getAntonyms = (antonym) => {
    return async (dispatch) => {
      try {
          let res = await apiCall(antonym)
                  return dispatch({
                    type: GET_ANTONTMS,
                    payload: res,
                  });
      } catch (e) {
        console.log(e.message);
      }
    };
  };
