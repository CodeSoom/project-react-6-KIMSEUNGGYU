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

  it('renders tags', () => {
    const { queryByRole } = render(<TagsContainer />);

    TAGS.forEach(({ name }) => {
      expect(queryByRole('button', { name })).toBeInTheDocument();
    });
  });
});
