import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadPosts,
} from '@modules/slice';

import PostItem from '@components/PostItem';

export default function PostsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  const { posts } = useSelector((state) => state);

  if (!posts.length) {
    return <p>등록된 post 가 존재하지 않습니다</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
        />
      ))}
    </ul>
  );
}
