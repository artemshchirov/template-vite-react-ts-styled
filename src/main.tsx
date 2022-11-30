import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { device } from './utils/device';

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
    primary: 'light',
    secondary: 'night',
  },
  media: {
    phone: device.mobileL,
    tablet: device.tablet,
    desktop: device.laptopM,
  },
};

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
