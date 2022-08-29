export const SEARCH_WORD = "SEARCH_WORD";
export const GET_DETAIL = "GET_DETAIL";
export const GET_SYNONYMS = "GET_SYNONYMS";
export const GET_ANTONTMS = "GET_ANTONTMS";
export const FAILED_MESSAGE = "FAILED_MESSAGE";

export interface Definitions {
  definition: string;
  synonyms: Array<string>;
  antonyms: Array<string>;
  example?: string;
}

export interface Meanings {
  partOfSpeech: string;
  definitions: Definitions[];
  synonyms: Array<string>;
  antonyms: Array<string>;
}

export interface License {
  name: string;
  url: string;
}

export interface Phonetics {
  text?: string;
  audio?: string;
  sourceUrl?: string;
  license?: License;
}

export interface WordData {
  word: string;
  phonetic?: string | Array<string>;
  phonetics: Phonetics[];
  meanings: Meanings[];
  license: License;
  sourceUrls: Array<string>;
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
  failedMessage: WordAlert | null;
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
