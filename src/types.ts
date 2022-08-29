export const SEARCH_WORD = "SEARCH_WORD";
export const GET_DETAIL = "GET_DETAIL";
export const GET_SYNONYMS = "GET_SYNONYMS";
export const GET_ANTONTMS = "GET_ANTONTMS";
export const FAILED_MESSAGE = "FAILED_MESSAGE";

export interface WordData {
  word: string;
  phonetic: {};
  phonetics: [];
  origin: {};
  meanings: [];
  license: {};
  sourceUrls: {};
  id: number;
}

export interface WordAlert {}

export interface WordState {
  words: Array<WordData>;
  antonyms: Array<WordData>;
  synonyms: Array<WordData>;
  detail: WordData[] | null;
  suggestions: Array<WordData>;
  failedMessage: WordAlert;
}

interface SearchWordsAction {
  type: typeof SEARCH_WORD;
  payload: WordData[];
}

interface GetDetailAction {
  type: typeof GET_DETAIL;
  payload: number;
}

interface GetSynonymsAction {
  type: typeof GET_SYNONYMS;
  payload: WordData[];
}

interface GetAntonymsAction {
  type: typeof GET_ANTONTMS;
  payload: WordData[];
}

interface FailedMessageAction {
  type: typeof FAILED_MESSAGE;
  payload: string;
}

export type Actions =
  | SearchWordsAction
  | GetDetailAction
  | GetSynonymsAction
  | GetAntonymsAction
  | FailedMessageAction;
