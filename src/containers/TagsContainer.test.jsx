import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import TagsContainer from './TagsContainer';

import TAGS from '../../fixture/tags';

jest.mock('react-redux');

describe('tagsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      tags: TAGS,
    }));
  });

  it('render', () => {
    const { queryByRole } = render(<TagsContainer />);

    TAGS.forEach((tag) => {
      expect(queryByRole('button', { name: tag })).toBeInTheDocument();
    });
  });
});
