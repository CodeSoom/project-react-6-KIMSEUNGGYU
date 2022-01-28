import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadTags,
  setTags,
} from './slice';

const middleware = [thunk];
const mockStore = configureStore(middleware);

jest.mock('../libs/api');

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
