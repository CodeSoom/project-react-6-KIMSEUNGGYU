import React from 'react';

import TagsContainer from '@containers/TagsContainer';
import PostsContainer from '@containers/PostsContainer';

export default function HomePage() {
  return (
    <>
      <TagsContainer />
      <PostsContainer />
    </>
  );
}
