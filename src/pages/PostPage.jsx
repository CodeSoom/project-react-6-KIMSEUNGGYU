import { useParams } from 'react-router-dom';

import { Global } from '@emotion/react';

import PostContainer from '@containers/PostContainer';

const PostPageGlobalStyle = {
  body: {
    background: 'white',
  },
};

export default function PostPage() {
  const { id } = useParams();

  return (
    <>
      <Global styles={PostPageGlobalStyle} />
      <PostContainer postId={id} />
    </>
  );
}
