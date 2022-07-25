import { FAILED_MESSAGE, GET_ANTONTMS, GET_DETAIL, GET_SYNONYMS, SEARCH_WORD } from "../actions/actions";

const initialState = {
    words: [],
    antonyms: [],
    synonyms: [],
    detail: [],
    suggestions: [],
    failedMessage: {}
};

export const rootReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case SEARCH_WORD: 
            return {
                ...state,
                words: payload
            }
        case GET_DETAIL:
            let res = state.words.length !== 0 ? state.words.filter(w => w.id == payload) : state.words;
            return {
                ...state,
                detail: res
            }
        case GET_SYNONYMS:
            return {
                ...state,
                synonyms: payload,
                suggestions: state.suggestions.concat(payload)
            }
        case GET_ANTONTMS:
            return {
                ...state,
                antonyms: payload,
                suggestions: state.suggestions.concat(payload)
            }
        case FAILED_MESSAGE:
            console.log("reducer",payload)
            return {
                ...state,
                failedMessage: payload
            }
        default: 
            return state
    }
};