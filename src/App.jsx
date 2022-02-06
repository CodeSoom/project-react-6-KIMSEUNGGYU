import styled from '@emotion/styled';

import { Routes, Route } from 'react-router-dom';

import Header from '@components/Header';

import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import SeriesPage from '@pages/SeriesPage';

export default function App() {
  return (
    <Container>
      <Header />
      <Divider />
      <Routes>
        <Route path="/" element={<HomePage />} />
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
