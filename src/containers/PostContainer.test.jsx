import { useSelector, useDispatch } from 'react-redux';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import { render } from '@utils/test-utils';

import {
  loadPost,
  setPost,
} from '@modules/slice';

import POST from '@/fixture/post';

import PostContainer from './PostContainer';

const mockStore = configureStore(getDefaultMiddleware());

jest.mock('react-redux');
jest.mock('../libs/api');

describe('PostsContainer', () => {
  let store;

  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      post: given.post,
    }));
  });

  function renderPostContainer() {
    return render(
      <PostContainer />,
    );
  }

  context('when load', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('dispatchs loadPost', async () => {
      renderPostContainer();

      expect(dispatch).toBeCalled();

      await store.dispatch(loadPost());

      const actions = store.getActions();

      expect(actions).toEqual([
        setPost({}),
      ]);
    });
  });

  context('with post', () => {
    given('post', () => POST);

    it('renders post', () => {
      const { container } = renderPostContainer();

      const { title, createdAt, tags } = POST;

      expect(container).toHaveTextContent(title);
      expect(container).toHaveTextContent(createdAt);
      tags.forEach((tag) => {
        expect(container).toHaveTextContent(`#${tag}`);
      });
    });
  });

  context('without post', () => {
    given('post', () => null);

    it('renders post empty message', () => {
      const { container } = renderPostContainer();

      expect(container).toHaveTextContent('등록된 POST 가 존재 하지 않습니다.');
    });
  });
});
