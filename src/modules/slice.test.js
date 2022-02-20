import TAGS from '@/fixture/tags';
import POSTS from '@/fixture/posts';
import POST from '@/fixture/post';
import SERIES from '@/fixture/series';

import reducer, {
  setIsLogin,
  setTags,
  setSelectedTag,
  setPosts,
  setSeries,
  setPost,
} from './slice';

// reducer 테스트
describe('reducer', () => {
  describe('setTags', () => {
    it('changes tags', () => {
      const previousState = {
        isLogin: false,
      };

      const state = reducer(previousState, setIsLogin(true));

      expect(state.isLogin).toBe(true);
    });
  });

  describe('setTags', () => {
    it('changes tags', () => {
      const previousState = {
        tags: [],
      };

      const state = reducer(previousState, setTags(TAGS));

      expect(state.tags).toHaveLength(TAGS.length);
      expect(state.tags).toEqual(TAGS);
    });
  });

  describe('setSelectedTag', () => {
    it('changes selectedTag', () => {
      const selectedTag = '#TAG1';

      const previousState = {
        selectedTag: '',
      };

      const state = reducer(previousState, setSelectedTag(selectedTag));

      expect(state.selectedTag).toBe(selectedTag);
    });
  });

  describe('setPosts', () => {
    it('changes posts', () => {
      const previousState = {
        posts: [],
      };

      const state = reducer(previousState, setPosts(POSTS));

      expect(state.posts).toEqual(POSTS);
    });
  });

  describe('setSeries', () => {
    it('changes series', () => {
      const previousState = {
        series: [],
      };

      const state = reducer(previousState, setSeries(SERIES));

      expect(state.series).toEqual(SERIES);
    });
  });

  describe('setPosts', () => {
    it('changes posts', () => {
      const previousState = {
        post: null,
      };

      const state = reducer(previousState, setPost(POST));

      expect(state.post).toEqual(POST);
    });
  });
});
