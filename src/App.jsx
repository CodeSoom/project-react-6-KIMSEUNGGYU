import styled from '@emotion/styled';

import Header from './components/Header';

function Tags() {
  return (
    <ul>
      <li>
        <button type="button">
          태그1
        </button>
      </li>
      <li>
        <button type="button">
          태그2
        </button>
      </li>
      <li>
        <button type="button">
          태그3
        </button>
      </li>
    </ul>
  );
}

export default function App() {
  return (
    <Container>
      <Header />
      <Divider />
      <Tags />
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Divider = styled.hr`
  width: 200%;
  position: absolute;
  left: 0;
  color: rgba(0, 0, 0, 0.15);
  margin: 0;
`;
