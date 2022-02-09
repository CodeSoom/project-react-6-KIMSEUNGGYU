import { useDispatch, useSelector } from 'react-redux';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import { render } from '@utils/test-utils';

import {
  loadSeries,
  setSeries,
} from '@modules/slice';

import SERIES from '@/fixture/series';

import SeriesContainer from './SeriesContainer';

const mockStore = configureStore(getDefaultMiddleware());

jest.mock('react-redux');
jest.mock('@libs/api');

describe('PostsContainer', () => {
  let store;

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      series: given.series,
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  function renderSeriesContainer() {
    return render(
      <SeriesContainer />,
    );
  }

  context('when load', () => {
    given('series', () => []);

    beforeEach(() => {
      store = mockStore({});
    });

    it('dispatchs loadSeries', async () => {
      renderSeriesContainer();

      expect(dispatch).toBeCalled();

      await store.dispatch(loadSeries());

      const actions = store.getActions();

      expect(actions).toEqual([
        setSeries([]),
      ]);
    });
  });

  context('with series', () => {
    given('series', () => SERIES);

    it('renders series', () => {
      const { container } = renderSeriesContainer();

      SERIES.forEach((series) => {
        expect(container).toHaveTextContent(series.title);
        expect(container).toHaveTextContent(series.subTitle);
      });
    });
  });

  context('without series', () => {
    given('series', () => []);

    it('renders empty message', () => {
      const { container } = renderSeriesContainer();

      expect(container).toHaveTextContent('시리즈가 없습니다.');
    });
  });
});
