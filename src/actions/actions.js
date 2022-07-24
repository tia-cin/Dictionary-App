export const SEARCH_WORD = "SEARCH_WORD";
export const GET_DETAIL = "GET_DETAIL";
export const GET_SYNONYMS = "GET_SYNONYMS";
export const GET_ANTONTMS = "GET_ANTONTMS";

const axios = require('axios');

export const searchWords = (input) => {
    return async (dispatch) => {
        try {
          const req = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
          return dispatch({
            type: SEARCH_WORD,
            payload: req.data
          })
        } catch (e) {
            console.log(e.message)
        }
    }
  };
