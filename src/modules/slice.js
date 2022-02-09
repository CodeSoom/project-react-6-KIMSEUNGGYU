import { createSlice } from '@reduxjs/toolkit';

// api
import {
  fetchTags,
  fetchPosts,
  fetchSeries,
} from '@libs/api';

//
const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    selectedTag: '#전체보기',
    tags: [],
    posts: [],
    series: [],
    post: null,
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

    setSeries(state, { payload: series }) {
      return {
        ...state,
        series,
      };
    },

    setPost(state, { payload: post }) {
      return {
        ...state,
        post,
      };
    },
  },
});

// export actions
export const {
  setTags,
  setSelectedTag,
  setPosts,
  setSeries,
  setPost,
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
    const posts = await fetchPosts();

    dispatch(setPosts(posts));
  };
}

export function loadSeries() {
  return async (dispatch) => {
    const series = await fetchSeries();

    dispatch(setSeries(series));
  };
}

// export reducer
export default reducer;
