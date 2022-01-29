import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import {
  loadTags,
  setTags,
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
});
