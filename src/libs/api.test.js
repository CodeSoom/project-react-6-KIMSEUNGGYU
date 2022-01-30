import axios from 'axios';

import TAGS from '@/fixture/tags';
import POSTS from '@/fixture/posts';

import {
  fetchTags,
  fetchPosts,
} from './api';

describe('api', () => {
  const mockFetch = (data) => {
    axios.get = jest.fn().mockResolvedValue({
      data,
    });
  };

  describe('fetchTags', () => {
    beforeEach(() => {
      mockFetch(TAGS);
    });

    it('return tags', async () => {
      const tags = await fetchTags();

      expect(tags).toEqual(TAGS);
    });
  });

  describe('fetchPosts', () => {
    beforeEach(() => {
      mockFetch(POSTS);
    });

    it('return posts', async () => {
      const posts = await fetchPosts();

      expect(posts).toEqual(POSTS);
    });
  });
});
