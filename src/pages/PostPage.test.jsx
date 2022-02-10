import { useDispatch, useSelector } from 'react-redux';

import {
  MemoryRouter,
  Routes,
  Route,
  useParams,
} from 'react-router';

import { render } from '@utils/test-utils';

import PostPage from '@pages/PostPage';

import POST from '@/fixture/post';

describe('Postpage', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      post: POST,
    }));
  });

  function renderPostPage(postId) {
    // page 의 path 를 제대로 가져왔는지 테스트 하기 위함
    function RenderPath() {
      const { id } = useParams();

      return <p>{id}</p>;
    }

    return render((
      <MemoryRouter initialEntries={[`/posts/${postId}`]}>
        <Routes>
          <Route
            path="posts/:id"
            element={(
              <>
                <RenderPath />
                <PostPage />
              </>
            )}
          />
        </Routes>
      </MemoryRouter>
    ));
  }

  context('when load', () => {
    it('get post id', () => {
      const { container } = renderPostPage(99);

      expect(container).toHaveTextContent('99');
    });
  });

  it('redners Post', () => {
    const { container } = renderPostPage(1);

    const { title, createdAt, tags } = POST;

    expect(container).toHaveTextContent(title);
    expect(container).toHaveTextContent(createdAt);
    tags.forEach((tag) => {
      expect(container).toHaveTextContent(`#${tag}`);
    });
  });
});
