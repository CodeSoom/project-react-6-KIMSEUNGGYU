import { render } from '@testing-library/react';

import TagItem from './TagItem';

test('TagItem', () => {
  const tagName = 'tag1';

  const { container } = render(<TagItem name={tagName} />);

  expect(container).toHaveTextContent(tagName);
});
