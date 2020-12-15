import {
  SET_NEXTWORD,
  SET_OPENWORDHIDDEN,
  SET_REVERSEHIDDEN,
  handleWordsHidden,
  ALLWORDS,
} from "../actions/wordTranslation";

import { prop } from "ramda";

const hidden = true;
const words = ALLWORDS[0];
const wordsHidden = handleWordsHidden([...words], hidden);

const initialState = {
  words,
  wordsHidden,
  currentWord: 0,
  hidden,
};

const initialActionState = (action) => ({
  words: prop("words", action),
  wordsHidden: prop("wordsHidden", action),
  currentWord: prop("currentWord", action),
  hidden: prop("hidden", action),
});

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_OPENWORDHIDDEN:
      return initialActionState(action);
    case SET_NEXTWORD:
      return initialActionState(action);
    case SET_REVERSEHIDDEN:
      return initialActionState(action);
    default:
      return state;
  }
};
