import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from "./theme"
import App from './App';
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
