import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import {
  loadTags,
  setTags,
  loadPosts,
  setPosts,
  loadSeries,
  setSeries,
  loadPost,
  setPost,
} from './slice';

const mockStore = configureStore(getDefaultMiddleware());

jest.mock('@libs/api');

// thunk action test
describe('actions', () => {
  let store;

  describe('loadTags', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('dispatchs setTags', async () => {
      await store.dispatch(loadTags());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setTags([]));
    });
  });

  describe('loadPosts', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('dispatchs setPosts', async () => {
      await store.dispatch(loadPosts());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setPosts([]));
    });
  });

  describe('loadSeries', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('dispatchs setSeries', async () => {
      await store.dispatch(loadSeries());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setSeries([]));
    });
  });

  describe('loadPosts', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('dispatchs setPosts', async () => {
      const postId = 1;

      await store.dispatch(loadPost(postId));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setPost({}));
    });
  });
});
