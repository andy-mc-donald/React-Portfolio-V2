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
      light: 'rgba(153, 184, 195, 0.17)',
      // dark: '#8d99ae'
    }, 
    secondary: {
      main: '#F2511B', 
      light: 'rgba(242, 81, 27, 0.5)', 
      // dark: ''
    }
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
