import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { container } = render(<App />);

  expect(container.innerHTML).toContain('<img src=');
  expect(container).toHaveTextContent('블로그');
  expect(container).toHaveTextContent('시리즈');
  expect(container).toHaveTextContent('로그인');
});
