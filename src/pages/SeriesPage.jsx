import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadSeries } from '@modules/slice';

import SeriesContainer from '@containers/SeriesContainer';

export default function SeriesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSeries());
  }, []);

  return (
    <SeriesContainer />
  );
}
