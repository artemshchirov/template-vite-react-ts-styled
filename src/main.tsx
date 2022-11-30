import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif; 
}
#root{
    margin: 0 auto;
}
`;

const theme = {
  colors: {
    primary: 'red',
    secondary: 'blue',
  },
  media: {
    phone: '(min-width: 425px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1280px)',
  },
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
