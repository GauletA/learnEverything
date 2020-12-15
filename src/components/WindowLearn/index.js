import React from "react";
import PropTypes from "prop-types";
import { map, addIndex, prop } from "ramda";

import useStyles from "./styles";
import BoxWords from "./BoxWords";
import { WhatWord, WordInYourLanguage } from "./WhatWord/";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const wordHidden = prop("word");
const wordIndex = prop("index");

const mapWords = addIndex(map);

const funcWords = (
  hidden,
  colorWords = ["default", "primary", "secondary"]
) => (word, index) =>
  typeof prop("index", word) === "number" ? (
    <WhatWord
      key={wordIndex(word)}
      word={wordHidden(word)}
      index={wordIndex(word)}
      hidden={hidden}
      color={colorWords[index]}
    />
  ) : (
    <Grid container justify="space-around">
      {map(
        (wordSynonym) => (
          <WhatWord
            key={wordIndex(wordSynonym)}
            word={wordHidden(wordSynonym)}
            index={wordIndex(wordSynonym)}
            hidden={hidden}
            color={colorWords[index]}
          />
        ),
        word
      )}
    </Grid>
  );

const funcWordsInYourLanguage = (hidden) => (word, index) => (
  <WordInYourLanguage
    key={index}
    word={wordHidden(word)}
    index={wordIndex(word)}
    hidden={hidden}
  />
);

const WindowLearn = ({ words, wordsInYourLanguage, hidden }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Paper className={classes.paper} elevation={10}>
        <Grid container className={classes.boxWords} wrap="nowrap">
          <BoxWords>{mapWords(funcWords(hidden[0]), words)}</BoxWords>
          <BoxWords>
            {mapWords(funcWordsInYourLanguage(hidden[1]), wordsInYourLanguage)}
          </BoxWords>
        </Grid>
      </Paper>
    </Grid>
  );
};

WindowLearn.propTypes = {
  hidden: PropTypes.arrayOf(PropTypes.string),
  words: PropTypes.array,
  wordsInYourLanguage: PropTypes.array,
};

export default WindowLearn;
