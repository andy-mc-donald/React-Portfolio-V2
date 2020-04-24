import React from "react";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page4 from "./Pages/Page4";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#2b2d42',
      light: '#eef3f5'
    }, 
    secondary: {
      main: '#F2511B', 
      light: '#f8a88d' 
    },
    text: {
      primary: '#2b2d42',
      secondary: '#eef3f5'
    }
  },
  overrides:{
    MuiInput: {
        underline: {
             '&:before': {
                borderBottom: '2px solid #eef3f5',
              },
              "&&&&:hover:before": {
                borderBottom: '2px solid #f8a88d',
              }
          },
    },
}
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <Page1 />
      <Page2 />
      <Page4 />
    </div>
    </MuiThemeProvider>
  );
}

export default App;
