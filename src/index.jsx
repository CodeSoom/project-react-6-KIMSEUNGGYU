import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { Global, ThemeProvider } from '@emotion/react';

import store from '@modules/store';

import theme from '@styles/theme';
import global from '@styles/global';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Global styles={global} />
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('app'),
);
