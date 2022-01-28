import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import TAGS from '../fixture/tags';

jest.mock('react-redux');
jest.mock('./libs/api');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      tags: TAGS,
    }));
  });

  it('renders  Header', () => {
    const { container } = render(<App />);

    expect(container.innerHTML).toContain('<img src=');
    expect(container).toHaveTextContent('블로그');
    expect(container).toHaveTextContent('시리즈');
    expect(container).toHaveTextContent('로그인');
  });

  it('redners tags', () => {
    const { queryByRole } = render(<App />);

    TAGS.forEach(({ name }) => {
      expect(queryByRole('button', { name: `#${name}` })).toBeInTheDocument();
    });
  });
});
