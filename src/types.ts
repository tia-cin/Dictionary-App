export const SEARCH_WORD = "SEARCH_WORD";
export const GET_DETAIL = "GET_DETAIL";
export const GET_SYNONYMS = "GET_SYNONYMS";
export const GET_ANTONTMS = "GET_ANTONTMS";
export const FAILED_MESSAGE = "FAILED_MESSAGE";

interface Definitions {
  definition: string;
  synonyms: Array<string>;
  antonyms: Array<string>;
  example?: string;
}

interface License {
  name: string;
  url: string;
}

export interface WordData {
  word: string;
  phonetic?: string | Array<string>;
  phonetics: Array<{
    text?: string;
    audio?: string;
    sourceUrl?: string;
    license?: License;
  }>;
  meanings: Array<{
    partOfSpeech: string;
    definitions: Definitions[];
    synonyms: Array<string>;
    antonyms: Array<string>;
  }>;
  license: License;
  sourceUrls: string;
  id: number;
}

export interface WordAlert {
  title: string;
  message: string;
  resolution: string;
}

export interface WordState {
  words: WordData[];
  antonyms: WordData[];
  synonyms: WordData[];
  detail: WordData[] | null;
  suggestions: WordData[];
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
