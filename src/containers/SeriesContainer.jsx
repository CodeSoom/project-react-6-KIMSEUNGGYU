import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadSeries } from '@modules/slice';

import styled from '@emotion/styled';

import Series from '@components/Series';

export default function SeriesContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSeries());
  }, []);

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

const Wrapper = styled.div({
  marginTop: '2rem',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem',
});
