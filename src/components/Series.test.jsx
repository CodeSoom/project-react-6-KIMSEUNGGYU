import React from 'react';

import { render } from '@utils/test-utils';

import userEvent from '@testing-library/user-event';

import Series from './Series';

import SERIES from '@/fixture/series';

describe('Series', () => {
  const SERIES_ITEM = SERIES[0];

  function renderSeries() {
    const result = render((
      <Series
        series={SERIES_ITEM}
      />
    ));

    return {
      ...result,
      toggle: () => userEvent.click(result.getByAltText('open')),
    };
  }

  it('renders series', () => {
    const { title, subTitle } = SERIES_ITEM;

    const { container } = renderSeries();

    expect(container).toHaveTextContent(title);
    expect(container).toHaveTextContent(subTitle);
  });

  it('clicks open icon, can be checked series posts', () => {
    const { container, getByAltText } = renderSeries();

    userEvent.click(getByAltText('open'));

    SERIES_ITEM.items.forEach(({ title }) => {
      expect(container).toHaveTextContent(title);
    });
  });

  it('clicks close icon, can\'t checked series posts', () => {
    const { container, getByAltText, toggle } = renderSeries();

    // given
    toggle();
    expect(getByAltText('close')).toBeInTheDocument();

    // when
    userEvent.click(getByAltText('close'));

    // then
    SERIES_ITEM.items.forEach((item) => {
      expect(container).not.toHaveTextContent(item.title);
    });
  });
});
