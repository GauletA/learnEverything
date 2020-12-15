import { getWordTranslation } from "../selectors/wordTranslation";
import { newTabWorlds, propIndex } from "../language";

import { wordsTab3 } from "../language/englishFrench.js";

const { map, prop, reduceWhile } = require("ramda");

export const SET_REVERSEHIDDEN = "WORDTRANSLATION/SET_REVERSEHIDDEN";
export const SET_NEXTWORD = "WORDTRANSLATION/SET_NEXTWORD";
export const SET_OPENWORDHIDDEN = "WORDTRANSLATION/SET_OPENWORDHIDDEN";
export const ALLWORDS = newTabWorlds(wordsTab3[2]);

export const reminder = (tab) =>
  typeof propIndex(tab) === "number"
    ? { ...tab, word: "?" }
    : map(reminder, tab);

export const handleWordsHidden = (tab, hidden) =>
  hidden ? [tab[0], reminder(tab[1])] : [reminder(tab[0]), tab[1]];

const ifWordsOpen = (index, word, elem) =>
  index === prop("index", elem) ? { ...elem, word: word } : { ...elem };

const reminderWord = (index, word) => (elem) =>
  typeof prop("index", elem) === "number"
    ? ifWordsOpen(index, word, elem)
    : map(reminderWord(index, word), elem);

const isOdd = (acc) => !(typeof acc === "string");
const saveWord = (acc, value) =>
  typeof prop("index", value) !== "number"
    ? searchIndex(acc, value)
    : prop("index", value) === acc
    ? prop("word", value)
    : acc;
const searchIndex = (index, tab) => reduceWhile(isOdd, saveWord, index, tab);

/*                        ACTIONS                       */

export const setNext = () => (dispatch, getState) => {
  const state = getWordTranslation(getState());
  const nextIndexWord =
    ALLWORDS.length > 1 + state.currentWord
      ? 1 + state.currentWord
      : state.currentWord;
  const hidden = prop("hidden", state);
  const words = ALLWORDS[nextIndexWord];
  const wordsHidden = handleWordsHidden([...words], hidden);

  dispatch({
    ...state,
    words,
    wordsHidden,
    currentWord: nextIndexWord,
    type: SET_NEXTWORD,
  });
};

export const setReverseHidden = () => (dispatch, getState) => {
  const state = getWordTranslation(getState());
  const words = prop("words", state);
  const hidden = !prop("hidden", state);
  const wordsHidden = handleWordsHidden([...words], hidden);

  dispatch({
    type: SET_REVERSEHIDDEN,
    ...state,
    wordsHidden,
    hidden,
  });
};

export const setOpenWord = (index) => (dispatch, getState) => {
  const state = getWordTranslation(getState());
  const tabHidden = prop("wordsHidden", state);
  const tabWords = prop("words", state);

  const wordSearch = searchIndex(index, tabWords);
  const wordsHidden = reminderWord(index, wordSearch)(tabHidden);

  dispatch({
    ...state,
    wordsHidden,
    type: SET_OPENWORDHIDDEN,
  });
};
