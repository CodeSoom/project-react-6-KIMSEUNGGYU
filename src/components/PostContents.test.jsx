import { render } from '@utils/test-utils';

import POST from '@/fixture/post';

import PostContents from './PostContents';

test('PostContents', () => {
  const { container } = render((
    <PostContents post={POST} />
  ));

  const { contents } = POST;

  expect(container).toHaveTextContent(contents);
});
