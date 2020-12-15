import React from "react";
import PropTypes from "prop-types";

import WindowLearn from "../WindowLearn";
import { useWindow } from "./hooks";
import useStyles from "./styles";

import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

const Window = () => {
  const classes = useStyles();
  const [wordsHidden, hidden, setNext, setReverseHidden] = useWindow();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Button className={classes.button} onClick={setReverseHidden}>
        Reverse
      </Button>
      <WindowLearn
        hidden={hidden}
        words={wordsHidden[0]}
        wordsInYourLanguage={wordsHidden[1]}
      />
      <Button className={classes.button} onClick={setNext}>
        Next
      </Button>
    </Grid>
  );
};

Window.propTypes = {
  words: PropTypes.array,
  wordsInYourLanguage: PropTypes.array,
};

export default Window;
