import { render, fireEvent } from '@testing-library/react';

import TagItem from './TagItem';

describe('TagItem', () => {
  const tagName = 'tag1';

  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  function renderTagItem() {
    return render(
      <TagItem
        name={tagName}
        onClick={handleClick}
      />,
    );
  }

  it('renders Tag', () => {
    const { container } = renderTagItem();

    expect(container).toHaveTextContent(`#${tagName}`);
  });

  it('clicks tag button, calls click handler', () => {
    const { getByRole } = renderTagItem();

    fireEvent.click(getByRole('button', { name: `#${tagName}` }));

    expect(handleClick).toBeCalledWith(`#${tagName}`);
  });
});
