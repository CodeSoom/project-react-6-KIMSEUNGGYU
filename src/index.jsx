import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { Global, ThemeProvider } from '@emotion/react';

import store from '@modules/store';

import App from './App';

import theme from './theme';

import global from './styles/global';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Global styles={global} />
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('app'),
);
