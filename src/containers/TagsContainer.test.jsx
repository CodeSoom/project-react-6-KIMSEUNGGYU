import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import TagsContainer from './TagsContainer';

import TAGS from '../../fixture/tags';

jest.mock('react-redux');
jest.mock('../libs/api');

describe('tagsContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      tags: given.tags,
    }));
  });

  function renderTagsContainer() {
    return render(
      <TagsContainer />,
    );
  }

  context('when load', () => {
    given('tags', () => []);

    it('dispatchs loadTags', () => {
      renderTagsContainer();

      expect(dispatch).toBeCalled();
    });
  });

  context('with tags', () => {
    given('tags', () => TAGS);

    it('renders tags', () => {
      const { queryByRole } = renderTagsContainer();

      TAGS.forEach(({ name }) => {
        expect(queryByRole('button', { name })).toBeInTheDocument();
      });
    });
  });

  context('without tags', () => {
    given('tags', () => []);

    it('renders empty tag message', () => {
      const { queryByText } = renderTagsContainer();

      expect(queryByText('등록된 태그가 없어요')).toBeInTheDocument();
    });
  });
});
