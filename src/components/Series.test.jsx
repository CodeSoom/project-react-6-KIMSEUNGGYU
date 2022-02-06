import { render } from '@utils/test-utils';

import Series from './Series';

import SERIES from '@/fixture/series';

describe('Series', () => {
  const SERIES_ITEM = SERIES[0];

  function renderSeries() {
    return render(
      <Series
        series={SERIES_ITEM}
      />,
    );
  }

  it('renders series', () => {
    const { title, subTitle } = SERIES_ITEM;

    const { container } = renderSeries();

    expect(container).toHaveTextContent(title);
    expect(container).toHaveTextContent(subTitle);
  });
});
