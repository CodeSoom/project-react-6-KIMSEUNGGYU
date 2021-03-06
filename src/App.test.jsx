import { useSelector, useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@utils/test-utils';

import TAGS from '@/fixture/tags';
import POSTS from '@/fixture/posts';
import POST from '@/fixture/post';
import SERIES from '@/fixture/series';

import App from './App';

jest.mock('react-redux');
jest.mock('@libs/api');
window.Kakao = {
  isInitialized: jest.fn(),
  init: jest.fn(),
  Auth: {
    getAccessToken: jest.fn(),
    login: jest.fn(),
  },
};

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      tags: TAGS,
      posts: POSTS,
      post: POST,
      series: SERIES,
      selectedTag: '#전체보기',
    }));
  });

  function renderApp() {
    return render(
      <MemoryRouter initialEntries={[given.path || '/']}>
        <App />
      </MemoryRouter>,
    );
  }

  it('renders Header', () => {
    const { container } = renderApp();

    expect(container.innerHTML).toContain('<img src=');
    expect(container).toHaveTextContent('블로그');
    expect(container).toHaveTextContent('시리즈');
    expect(container).toHaveTextContent('로그인');
  });

  context('with path /', () => {
    given('path', () => '/');

    it('renders the home page', () => {
      const { container, queryByRole } = renderApp();

      TAGS.forEach(({ name }) => {
        expect(queryByRole('button', { name: `#${name}` })).toBeInTheDocument();
      });

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

  context('with path /series', () => {
    given('path', () => '/series');

    it('renders the series page', () => {
      const { container } = renderApp();

      SERIES.forEach(({
        title, subTitle,
      }) => {
        expect(container).toHaveTextContent(title);
        expect(container).toHaveTextContent(subTitle);
      });
    });
  });

  context('with path /posts/1', () => {
    given('path', () => '/posts/1');

    it('renders the post page', () => {
      const { container } = renderApp();

      const { title, createdAt, tags } = POST;

      expect(container).toHaveTextContent(title);
      expect(container).toHaveTextContent(createdAt);
      tags.forEach((tag) => {
        expect(container).toHaveTextContent(`#${tag}`);
      });
    });
  });

  context('with undefined path', () => {
    given('path', () => '/undefined-url');

    it('renders the not found page', () => {
      const { container } = renderApp();

      expect(container).toHaveTextContent('Not Found Page');
    });
  });
});
