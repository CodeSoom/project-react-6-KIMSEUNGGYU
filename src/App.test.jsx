import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders  Header', () => {
    const { container } = render(<App />);

    expect(container.innerHTML).toContain('<img src=');
    expect(container).toHaveTextContent('블로그');
    expect(container).toHaveTextContent('시리즈');
    expect(container).toHaveTextContent('로그인');
  });

  it('redners tags', () => {
    const { queryByRole } = render(<App />);

    const tags = ['태그1', '태그2', '태그3'];

    tags.forEach((tag) => {
      expect(queryByRole('button', { name: tag })).toBeInTheDocument();
    });
  });
});
