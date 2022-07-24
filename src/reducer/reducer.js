import { SEARCH_WORD } from "../actions/actions";

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
        default: 
            return state
    }
};