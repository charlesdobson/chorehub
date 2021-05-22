import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle, theme } from 'styles';
import { ThemeProvider } from 'styled-components';
import Views from 'views';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Views />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
