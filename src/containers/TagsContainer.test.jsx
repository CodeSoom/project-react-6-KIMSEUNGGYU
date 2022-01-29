import { useSelector, useDispatch } from 'react-redux';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import { render } from '@utils/test-utils';

import userEvent from '@testing-library/user-event';

import {
  loadTags,
  setTags,
  setSelectedTag,
} from '@modules/slice';

import TAGS from '@/fixture/tags';

import TagsContainer from './TagsContainer';

const mockStore = configureStore(getDefaultMiddleware());

jest.mock('react-redux');
jest.mock('../libs/api');

describe('tagsContainer', () => {
  let store;

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

    beforeEach(() => {
      store = mockStore({});
    });

    it('dispatchs loadTags', async () => {
      renderTagsContainer();

      // load 시 dispatch 콜 확인
      expect(dispatch).toBeCalled();

      // dispatch 와 함깨 호출된 thunk 확인 위한 작업?
      await store.dispatch(loadTags());

      const actions = store.getActions();

      expect(actions).toEqual([
        setTags([]),
      ]);
    });
  });

  context('with tags', () => {
    given('tags', () => TAGS);

    it('renders tags', () => {
      const { queryByRole } = renderTagsContainer();

      TAGS.forEach(({ name }) => {
        expect(queryByRole('button', { name: `#${name}` })).toBeInTheDocument();
      });
    });

    it('clicks tag button, calls dispatch to change selecteTag', () => {
      const selectedTagName = `#${TAGS[1].name}`;

      const { getByRole } = renderTagsContainer();

      userEvent.click(getByRole('button', { name: selectedTagName }));

      expect(dispatch).toBeCalledWith(setSelectedTag(selectedTagName));
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
