import TAGS from '@/fixture/tags';

import {
  fetchTags,
} from './api';

describe('api', () => {
  // spy 로도? 정의 가능?
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
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
