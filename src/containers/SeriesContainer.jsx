import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import Series from '@components/Series';

export default function SeriesContainer() {
  const { series } = useSelector((state) => state);

  if (!series.length) {
    return (
      <p>시리즈가 없습니다.</p>
    );
  }

  return (
    <Wrapper>
      {series
        .map((item) => (
          <Series
            key={item.id}
            series={item}
          />
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul({
  marginTop: '2rem',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem',
});
