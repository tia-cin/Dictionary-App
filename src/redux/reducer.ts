import { Actions, FAILED_MESSAGE, WordState } from "../types";
import { GET_ANTONTMS, GET_DETAIL, GET_SYNONYMS, SEARCH_WORD } from "../types";

const initialState: WordState = {
  words: [],
  antonyms: [],
  synonyms: [],
  detail: null,
  suggestions: [],
  failedMessage: null,
};

export const rootReducer = (
  state = initialState,
  action: Actions
): WordState => {
  switch (action.type) {
    case SEARCH_WORD:
      return {
        ...state,
        words: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail:
          state.words.length > 1
            ? state.words.filter((w) => w.id == action.payload)
            : state.words,
      };
    case GET_SYNONYMS:
      return {
        ...state,
        synonyms: action.payload,
        suggestions: state.suggestions.concat(action.payload),
      };
    case GET_ANTONTMS:
      return {
        ...state,
        antonyms: action.payload,
        suggestions: state.suggestions.concat(action.payload),
      };
    default:
      return state;
  }
};
