import { ThemeProvider } from '@emotion/react';

import { render } from '@testing-library/react';

import theme from '@styles/theme';

const AllTheProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

function customRender(ui, options) {
  return (
    render(ui, { wrapper: AllTheProvider, ...options })
  );
}

export * from '@testing-library/react';

export { customRender as render };
