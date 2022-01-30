import { createSlice } from '@reduxjs/toolkit';

// api
import {
  fetchTags,
  fetchPosts,
} from '@libs/api';

//
const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    selectedTag: '', // 초기값 null이 나을까?
    tags: [],
    posts: [],
  },
  reducers: {
    setTags(state, { payload: tags }) {
      return {
        ...state,
        tags,
      };
    },

    setSelectedTag(state, { payload: selectedTagName }) {
      return {
        ...state,
        selectedTag: selectedTagName,
      };
    },

    setPosts(state, { payload: posts }) {
      return {
        ...state,
        posts,
      };
    },
  },
});

// export actions
export const {
  setTags,
  setSelectedTag,
  setPosts,
} = actions;

// thunk actions
export function loadTags() {
  return async (dispatch) => {
    const tags = await fetchTags();

    dispatch(setTags(tags));
  };
}

export function loadPosts() {
  return async (dispatch) => {
    const tags = await fetchPosts();

    dispatch(setPosts(tags));
  };
}

// export reducer
export default reducer;
