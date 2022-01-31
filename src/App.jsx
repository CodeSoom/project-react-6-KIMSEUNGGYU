import styled from '@emotion/styled';

import TagsContainer from '@containers/TagsContainer';
import PostsContainer from '@containers/PostsContainer';

import Header from '@components/Header';

export default function App() {
  return (
    <Container>
      <Header />
      <Divider />
      <TagsContainer />
      <PostsContainer />
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Divider = styled.hr`
  width: 100%;
  position: absolute;
  left: 0;
  color: rgba(0, 0, 0, 0.15);
  margin: 0;
`;
