import axios from 'axios';

import TAGS from '@/fixture/tags';
import SERIES from '@/fixture/series';
import POSTS from '@/fixture/posts';
import POST from '@/fixture/post';

import {
  fetchTags,
  fetchPosts,
  fetchSeries,
  fetchPost,
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

  describe('fetchSeries', () => {
    beforeEach(() => {
      mockFetch(SERIES);
    });

    it('return posts', async () => {
      const series = await fetchSeries();

      expect(series).toEqual(SERIES);
    });
  });

  describe('fetchPost', () => {
    beforeEach(() => {
      mockFetch(POST);
    });

    it('return posts', async () => {
      const postId = 1;

      const post = await fetchPost(postId);

      expect(post).toEqual(POST);
    });
  });
});
