import axios from 'axios';

import TAGS from '@/fixture/tags';

import {
  fetchTags,
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
});
