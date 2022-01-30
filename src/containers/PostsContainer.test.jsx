import { useSelector, useDispatch } from 'react-redux';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import { render } from '@utils/test-utils';

import {
  loadPosts,
  setPosts,
} from '@modules/slice';

import PostsContainer from './PostsContainer';

const mockStore = configureStore(getDefaultMiddleware());

jest.mock('react-redux');
jest.mock('../libs/api');

describe('tagsContainer', () => {
  let store;

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

  context('when load', () => {
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
});
