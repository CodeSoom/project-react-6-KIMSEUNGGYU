import { render } from '@utils/test-utils';

import userEvent from '@testing-library/user-event';

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
        selectedTag="#전체보기"
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

    userEvent.click(getByRole('button', { name: `#${tagName}` }));

    expect(handleClick).toBeCalledWith(`#${tagName}`);
  });
});
