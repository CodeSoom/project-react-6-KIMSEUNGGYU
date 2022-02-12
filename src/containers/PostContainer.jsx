import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadPost,
} from '@modules/slice';

import PostInfo from '@components/PostInfo';
import PostContents from '@components/PostContents';

export default function PostsContainer({ postId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPost(postId));
  }, []);

  const { post } = useSelector((state) => state);

  if (!post) {
    return <p>등록된 POST 가 존재 하지 않습니다.</p>;
  }

  return (
    <>
      <PostInfo post={post} />
      <PostContents post={post} />
    </>
  );
}
