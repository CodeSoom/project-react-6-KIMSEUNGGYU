import { render } from '@utils/test-utils';

import { useSelector, useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import HeaderContainer from './HeaderContainer';

jest.mock('react-redux');
window.Kakao = {
  isInitialized: jest.fn(),
  init: jest.fn(),
  Auth: {
    getAccessToken: jest.fn(),
    login: jest.fn(),
  },
};

describe('HeaderContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      isLogin: false,
    }));
  });

  function renderHeaderContainer() {
    return render((
      <MemoryRouter>
        <HeaderContainer />
      </MemoryRouter>
    ));
  }

  it('render', () => {
    const { container } = renderHeaderContainer();

    expect(container.innerHTML).toContain('<img src=');
    expect(container).toHaveTextContent('블로그');
    expect(container).toHaveTextContent('시리즈');
    expect(container).toHaveTextContent('로그인');
  });
});
