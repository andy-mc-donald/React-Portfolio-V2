import React from "react";
// import Page1 from "./Pages/Page1";
// import Page2 from "./Pages/Page2";
import Page1pt2 from "./Pages/Page1pt2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import "./App.css";
// import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#2b2d42',
      // light: 'rgba(153, 184, 195, 0.17)',
      light: '#eef3f5'
      // dark: '#8d99ae'
    }, 
    secondary: {
      main: '#F2511B', 
      // light: 'rgba(242, 81, 27, 0.5)',
      light: '#f8a88d' 
      // dark: ''
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
      {/* <CssBaseline /> */}
      {/* <Page1 /> */}
      {/* <Page2 /> */}
      <Page1pt2 />
      <Page3 />
      <Page4 />
    </div>
    </MuiThemeProvider>
  );
}

export default App;
