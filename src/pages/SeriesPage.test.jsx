import { useDispatch, useSelector } from 'react-redux';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import { render } from '@utils/test-utils';

import {
  loadSeries,
  setSeries,
} from '@modules/slice';

import SeriesPage from './SeriesPage';

const mockStore = configureStore(getDefaultMiddleware());

jest.mock('react-redux');
jest.mock('@libs/api');

describe('SeriesPage', () => {
  let store;

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      series: [],
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  function renderSeriesPage() {
    return render(
      <SeriesPage />,
    );
  }

  context('when load', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('dispatchs loadSeries', async () => {
      renderSeriesPage();

      expect(dispatch).toBeCalled();

      await store.dispatch(loadSeries());

      const actions = store.getActions();

      expect(actions).toEqual([
        setSeries([]),
      ]);
    });
  });

  // TODO: series 가 있는 경우, 없는 경우 테스트 ?
  // 컨테이너에서 검사하는데 굳이 해야할까?
});
