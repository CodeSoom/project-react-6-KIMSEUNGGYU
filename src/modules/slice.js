import { createSlice } from '@reduxjs/toolkit';

// api

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
  },
});

// export actions
export const {
  setTags,
} = actions;

// thunk actions
export function loadTags() {
  return async (dispatch, getState) => {

  };
}

// export reducer
export default reducer;
