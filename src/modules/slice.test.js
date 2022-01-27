import reducer, {
  setTags,
} from './slice';

import TAGS from '../../fixture/tags';

// reducer 테스트
describe('reducer', () => {
  describe('setTags', () => {
    it('chagnes tags', () => {
      const previousState = {
        tags: [],
      };

      const state = reducer(previousState, setTags(TAGS));

      expect(state.tags).toHaveLength(TAGS.length);
      expect(state.tags).toEqual(TAGS);
    });
  });
});

// actions thunk 는 actions.test.js 에서 테스트?
