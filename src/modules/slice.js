import { createSlice } from '@reduxjs/toolkit';

// api
import { fetchTags } from '../libs/api';

//
const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    selectedTag: '', // 초기값 null이 나을까?
    tags: [],
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
  },
});

// export actions
export const {
  setTags,
  setSelectedTag,
} = actions;

// thunk actions
export function loadTags() {
  return async (dispatch) => {
    const tags = await fetchTags();

    dispatch(setTags(tags));
  };
}

// export reducer
export default reducer;
