import { useSelector, useDispatch } from 'react-redux';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import { render } from '@utils/test-utils';

import {
  loadPosts,
  setPosts,
} from '@modules/slice';

import POSTS from '@/fixture/posts';

import PostsContainer from './PostsContainer';

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
      posts: given.posts,
      selectedTag: given.selectedTag,
    }));
  });

  function renderPostsContainer() {
    return render(
      <PostsContainer />,
    );
  }

  context('when load', () => {
    given('posts', () => POSTS);
    given('selectedTag', () => '#전체보기');

    beforeEach(() => {
      store = mockStore({});
    });

    it('dispatchs loadPosts', async () => {
      renderPostsContainer();

      expect(dispatch).toBeCalled();

      await store.dispatch(loadPosts());

      const actions = store.getActions();

      expect(actions).toEqual([
        setPosts([]),
      ]);
    });
  });

  // 1. 컨테스트에서 posts 데이터가 있는 경우와 없는 경우
  context('with posts', () => {
    given('posts', () => POSTS);
    given('selectedTag', () => '#전체보기');

    it('renders posts', () => {
      const { container } = renderPostsContainer();

      POSTS.forEach(({
        title, contents, tags, createdAt,
      }) => {
        expect(container).toHaveTextContent(title);
        expect(container).toHaveTextContent(contents);
        expect(container).toHaveTextContent([...tags]);
        expect(container).toHaveTextContent(createdAt);
      });
    });
  });

  context('without posts', () => {
    given('posts', () => []);

    it('renders empty posts message', () => {
      const { container } = renderPostsContainer();

      expect(container).toHaveTextContent('등록된 post 가 존재하지 않습니다');
    });
  });

  context('when select tag', () => {
    given('posts', () => POSTS);
    given('selectedTag', () => '#자료구조');

    it('renders posts related to tag', () => {
      const { container } = renderPostsContainer();

      POSTS //
        .filter((post) => post.tags.includes('자료구조'))
        .forEach(({
          title, contents, tags, createdAt,
        }) => {
          expect(container).toHaveTextContent(title);
          expect(container).toHaveTextContent(contents);
          expect(container).toHaveTextContent([...tags]);
          expect(container).toHaveTextContent(createdAt);
        });
    });
  });
});
