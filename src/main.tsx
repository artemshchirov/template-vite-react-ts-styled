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
    box-sizing: border-box;
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
    phone: device.mobileL,
    tablet: device.tablet,
    desktop: device.laptopM,
  },
};

let container: HTMLElement;
document.addEventListener('DOMContentLoaded', function (event) {
  if (!container) {
    container = document.getElementById('root') as HTMLElement;
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Global />
          <App />
        </ThemeProvider>
      </React.StrictMode>
    );
  }
});
