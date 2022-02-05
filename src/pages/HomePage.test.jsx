import { useSelector, useDispatch } from 'react-redux';

import { render } from '@utils/test-utils';

import TAGS from '@/fixture/tags';
import POSTS from '@/fixture/posts';

import HomePage from './HomPage';

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

  // render
  it('redners tags', () => {
    const { queryByRole } = render(<HomePage />);

    TAGS.forEach(({ name }) => {
      expect(queryByRole('button', { name: `#${name}` })).toBeInTheDocument();
    });
  });

  it('renders posts', () => {
    const { container } = render(<HomePage />);

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
