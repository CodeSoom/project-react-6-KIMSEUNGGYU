import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import {
  ThemeProvider,
  Global,
} from '@emotion/react';

import store from '@modules/store';

import App from './App';

import theme from './theme';
import global from './global';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Global styles={global} />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('app'),
);
