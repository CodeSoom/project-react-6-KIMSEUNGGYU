import { render } from '@utils/test-utils';

import POST from '@/fixture/post';

import PostItem from './PostItem';

describe('TagItem', () => {
  function renderTagItem() {
    return render(
      <PostItem
        post={POST}
      />,
    );
  }

  // summary 가 있는 경우/없는 경우에 따라 UI 가 달라짐
  context('with summary of post', () => {
    it('renders Post', () => {
      const { container } = renderTagItem();

      expect(container).toHaveTextContent(POST.title);
      expect(container).toHaveTextContent(POST.createdAt);
      expect(container.innerHTML).toContain('<img src=');
      expect(container).toHaveTextContent(POST.contents);
      expect(container).toHaveTextContent(POST.tags);
    });
  });

  context('without summary of post', () => {
    it('renders Post', () => {
      const { container } = renderTagItem();

      expect(container).toHaveTextContent(POST.title);
      expect(container).toHaveTextContent(POST.createdAt);
      expect(container).toHaveTextContent(POST.contents);
      expect(container).toHaveTextContent(POST.tags);
    });
  });
});
