import { Actions, WordState } from "../types";
import { GET_DETAIL, SEARCH_WORD, FAILED_MESSAGE } from "../types";

const initialState: WordState = {
  words: [],
  detail: null,
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
            ? state.words.filter((w) => w.id === action.payload)
            : state.words,
      };
    case FAILED_MESSAGE:
      return {
        ...state,
        failedMessage: action.payload,
      };
    default:
      return state;
  }
};
