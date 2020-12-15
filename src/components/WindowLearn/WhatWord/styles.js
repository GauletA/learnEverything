import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles(theme => ({
  root: {
    fontWeight: "700",
    letterSpacing: "0.2em",
    fontFamily: '"Nunito", sans-serif'
  },
  paper: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  }
}));
