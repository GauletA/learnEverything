import React from "react";
import PropTypes from "prop-types";

import { useWhatWord } from "./hooks";
import useStyles from "./styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export const WhatWord = ({ word, index, color }) => {
  const classes = useStyles();
  const [setOpenWord] = useWhatWord();

  return (
    <Button variant="outlined" color={color} onClick={() => setOpenWord(index)}>
      <Grid container justify="center">
        <Grid className={classes.root}>{word}</Grid>
      </Grid>
    </Button>
  );
};

export const WordInYourLanguage = ({ word, index }) => {
  const classes = useStyles();
  const [setOpenWord] = useWhatWord();

  return (
    <Button variant="outlined" onClick={() => setOpenWord(index)}>
      <Grid container justify="center">
        <Grid className={classes.root}>{word}</Grid>
      </Grid>
    </Button>
  );
};

WhatWord.propTypes = {
  word: PropTypes.string,
  hidden: PropTypes.string,
  color: PropTypes.string,
  index: PropTypes.number,
};

WordInYourLanguage.propTypes = {
  word: PropTypes.string,
  hidden: PropTypes.string,
  index: PropTypes.number,
};
