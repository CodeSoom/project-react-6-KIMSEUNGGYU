import { render } from '@utils/test-utils';

import POST from '@/fixture/post';

import PostInfo from './PostInfo';

test('PostInfo', () => {
  const { container } = render((
    <PostInfo post={POST} />
  ));

  const { title, createdAt, tags } = POST;

  expect(container).toHaveTextContent(title);
  expect(container).toHaveTextContent(createdAt);
  tags.forEach((tag) => {
    expect(container).toHaveTextContent(`#${tag}`);
  });
});
