import { MemoryRouter } from 'react-router-dom';

import { render } from '@utils/test-utils';

import Header from './Header';

test('Header', () => {
  const { container } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  expect(container.innerHTML).toContain('<img src=');
  expect(container).toHaveTextContent('블로그');
  expect(container).toHaveTextContent('시리즈');
  expect(container).toHaveTextContent('로그인');
});
