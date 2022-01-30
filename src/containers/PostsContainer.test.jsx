import { useSelector, useDispatch } from 'react-redux';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import { render } from '@utils/test-utils';

import {
  loadPosts,
  setPosts,
} from '@modules/slice';

import POSTS from '@/fixture/posts';

import PostsContainer from './PostsContainer';

const mockStore = configureStore(getDefaultMiddleware());

jest.mock('react-redux');
jest.mock('../libs/api');

describe('PostsContainer', () => {
  let store;

  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      posts: given.posts,
    }));
  });

  function renderPostsContainer() {
    return render(
      <PostsContainer />,
    );
  }

  context('when load', () => {
    given('posts', () => POSTS);

    beforeEach(() => {
      store = mockStore({});
    });

    it('dispatchs loadPosts', async () => {
      renderPostsContainer();

      expect(dispatch).toBeCalled();

      await store.dispatch(loadPosts());

      const actions = store.getActions();

      expect(actions).toEqual([
        setPosts([]),
      ]);
    });
  });

  context('with posts', () => {
    given('posts', () => POSTS);

    it('renders posts', () => {
      const { container } = renderPostsContainer();

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

  context('without posts', () => {
    given('posts', () => []);

    it('renders empty posts message', () => {
      const { container } = renderPostsContainer();

      expect(container).toHaveTextContent('등록된 post 가 존재하지 않습니다');
    });
  });
});
