import { useSelector, useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router';

import { render } from '@utils/test-utils';

import TAGS from '@/fixture/tags';
import POSTS from '@/fixture/posts';

import HomePage from './HomePage';

jest.mock('react-redux');
jest.mock('@libs/api');

describe('HomePage', () => {
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

  function renderHomePage() {
    return render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));
  }

  // render
  it('redners tags', () => {
    const { queryByRole } = renderHomePage();

    TAGS.forEach(({ name }) => {
      expect(queryByRole('button', { name: `#${name}` })).toBeInTheDocument();
    });
  });

  it('renders posts', () => {
    const { container } = renderHomePage();

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
