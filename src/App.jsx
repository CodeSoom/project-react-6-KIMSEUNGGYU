import { Routes, Route } from 'react-router-dom';

import styled from '@emotion/styled';

import HeaderContainer from '@containers/HeaderContainer';

import HomePage from '@pages/HomePage';
import SeriesPage from '@pages/SeriesPage';
import PostPage from '@pages/PostPage';
import NotFoundPage from '@pages/NotFoundPage';

export default function App() {
  return (
    <Container>
      <HeaderContainer />
      <Divider />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
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
