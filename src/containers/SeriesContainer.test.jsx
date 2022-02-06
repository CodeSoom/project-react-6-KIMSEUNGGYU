import { useSelector } from 'react-redux';

import { render } from '@utils/test-utils';

import SERIES from '@/fixture/series';

import SeriesContainer from './SeriesContainer';

jest.mock('react-redux');
jest.mock('@libs/api');

describe('PostsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      series: given.series,
    }));
  });

  function renderSeriesContainer() {
    return render(
      <SeriesContainer />,
    );
  }

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
