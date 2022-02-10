import { useParams } from 'react-router-dom';

import PostContainer from '@containers/PostContainer';

export default function PostPage() {
  const { id } = useParams();

  return (
    <>
      <PostContainer postId={id} />
    </>
  );
}
