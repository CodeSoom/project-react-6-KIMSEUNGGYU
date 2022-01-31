import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

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
    <Posts>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
        />
      ))}
    </Posts>
  );
}

const Posts = styled.ul`
  margin: 2rem 0;
  border-radius: 5px;
  padding: 1rem 0;
`;
