import React from "react";
import { node } from "prop-types";
import * as R from "ramda";

import Grid from "@material-ui/core/Grid";

const BoxWords = ({ children }) => {
  return (
    <Grid
      container
      item
      md={6}
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      {R.map(val => val, children)}
    </Grid>
  );
};

BoxWords.propTypes = {
  children: node.isRequired
};

export default BoxWords;
