import { render } from '@utils/test-utils';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  // render
  it('redners Not Found Page Message', () => {
    const { container } = render(<NotFoundPage />);

    expect(container).toHaveTextContent('Not Found Page');
  });
});
