import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { ThemeProvider } from '@emotion/react';

import store from '@modules/store';

import App from './App';

import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('app'),
);
