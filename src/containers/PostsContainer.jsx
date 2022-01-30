import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadPosts,
} from '@modules/slice';

export default function TagsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  return (
    <ul>
      <li>포스트1</li>
    </ul>
  );
}
