import { useDispatch, useSelector } from 'react-redux';

import { render } from '@utils/test-utils';

import SERIES from '@/fixture/series';

import SeriesPage from './SeriesPage';

describe('SeriesPage', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => jest.fn());
    useSelector.mockImplementation((selector) => selector({
      series: SERIES,
    }));
  });

  function renderSeriesPage() {
    return render(
      <SeriesPage />,
    );
  }

  it('renders series', () => {
    const { container } = renderSeriesPage();

    SERIES.forEach(({ title, subTitle }) => {
      expect(container).toHaveTextContent(title);
      expect(container).toHaveTextContent(subTitle);
    });
  });
});
