import { useSelector, useDispatch } from 'react-redux';

import { render } from '@utils/test-utils';

import TAGS from '@/fixture/tags';
import POSTS from '@/fixture/posts';

import App from './App';

jest.mock('react-redux');
jest.mock('@libs/api');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      tags: TAGS,
      posts: POSTS,
      selectedTag: '#전체보기',
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

  it('renders posts', () => {
    const { container } = render(<App />);

    POSTS.forEach(({
      title, contents, tags, createdAt,
    }) => {
      expect(container).toHaveTextContent(title);
      expect(container).toHaveTextContent(contents);
      expect(container).toHaveTextContent([tags]);
      expect(container).toHaveTextContent(createdAt);
    });
  });
});
