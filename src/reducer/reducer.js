import { GET_ANTONTMS, GET_DETAIL, GET_SYNONYMS, SEARCH_WORD } from "../actions/actions";

const initialState = {
    words: [],
    antonyms: [],
    synonyms: [],
    detail: []
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
            console.log(payload)
            return {
                ...state,
                synonyms: payload
            }
        case GET_ANTONTMS:
            console.log(payload)
            return {
                ...state,
                antonyms: payload
            }
        default: 
            return state
    }
};