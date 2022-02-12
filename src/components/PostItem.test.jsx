import { render } from '@utils/test-utils';

import { MemoryRouter } from 'react-router';

import POST from '@/fixture/post';

import PostItem from './PostItem';

describe('PostItem', () => {
  function renderTagItem() {
    return render((
      <MemoryRouter>
        <PostItem
          post={given.post}
        />
      </MemoryRouter>
    ));
  }

  it('renders post', () => {
    given('post', () => POST);

    const { container } = renderTagItem();

    expect(container).toHaveTextContent(POST.title);
    expect(container).toHaveTextContent(POST.createdAt);
    expect(container).toHaveTextContent(POST.contents);
    expect(container).toHaveTextContent(POST.tags);
  });

  context('with summary of post', () => {
    given('post', () => POST);

    it('renders summary image', () => {
      const { container } = renderTagItem();

      expect(container.innerHTML).toContain('<img src=');
    });
  });

  context('without summary of post', () => {
    given('post', () => ({
      ...POST,
      summary: null,
    }));

    it('don\'t do render summary of post', () => {
      const { container } = renderTagItem();

      expect(container.innerHTML).not.toContain('<img src=');
    });
  });
});
