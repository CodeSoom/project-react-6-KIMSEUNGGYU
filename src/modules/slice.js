import { createSlice } from '@reduxjs/toolkit';

// api
import { fetchTags } from '../libs/api';

//
const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    tags: [],
  },
  reducers: {
    setTags(state, { payload: tags }) {
      return {
        ...state,
        tags,
      };
    },
    setSelectedTag() {},
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
