import { useSelector, useDispatch } from 'react-redux';

import {
} from '@modules/slice';

import { render } from '@utils/test-utils';

import PostsContainer from './PostsContainer';

jest.mock('react-redux');
jest.mock('../libs/api');

describe('tagsContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      posts: [],
    }));
  });

  function renderPostsContainer() {
    return render(
      <PostsContainer />,
    );
  }

  it('dispatchs loadPosts', () => {
    renderPostsContainer();

    expect(dispatch).toBeCalled();
  });
});
