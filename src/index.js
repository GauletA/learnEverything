import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import "./index.css";
import App from "./components/App";
import configureStore from "./store";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
    primary: {
      main: "#757ce8",
      light: orange[500],
    },
    default: {
      main: "#FFFFFF",
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#38383C",
      },
    },
  },
});

const store = configureStore();

const ROOT = (
  <ReduxProvider store={store}>
    <ThemeProvider theme={outerTheme}>
      <App />
    </ThemeProvider>
  </ReduxProvider>
);

ReactDOM.render(ROOT, document.getElementById("root"));

// const innerTheme = createMuiTheme({
//   palette: {
//     secondary: {
//       main: red[500]
//     },
//     primary: {
//       main: green[500]
//     }
//   },
//   overrides: {
//     MuiPaper: {
//       root: {
//         backgroundColor: "#484852"
//       }
//     }
//   }
// });
