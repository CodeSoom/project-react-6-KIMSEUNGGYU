import { MemoryRouter } from 'react-router-dom';

import { render } from '@utils/test-utils';

import userEvent from '@testing-library/user-event';

import Header from './Header';

jest.mock('react-redux');
jest.mock('../libs/api');

window.Kakao = {
  isInitialized: jest.fn(),
  init: jest.fn(),
  Auth: {
    getAccessToken: jest.fn(),
    login: jest.fn(),
  },
};

describe('Header', () => {
  const handleClickLogin = jest.fn();
  const handleClickLogout = jest.fn();

  function renderHeader() {
    return render((
      <MemoryRouter>
        <Header
          isLogin={given.isLogin}
          onLogin={handleClickLogin}
          onLogout={handleClickLogout}
        />
      </MemoryRouter>
    ));
  }

  it('render', () => {
    const { container } = renderHeader();

    expect(container.innerHTML).toContain('<img src=');
    expect(container).toHaveTextContent('블로그');
    expect(container).toHaveTextContent('시리즈');
    expect(container).toHaveTextContent('로그인');
  });

  context('when loggin', () => {
    given('isLogin', () => false);

    it('clicks login, calls kakaoLogin handler', () => {
      const { queryByText } = renderHeader();

      userEvent.click(queryByText('로그인'));

      expect(handleClickLogin).toBeCalled();
    });
  });

  context('when loggout', () => {
    given('isLogin', () => true);

    it('clicks loggout, calls kakaoLogout handler', () => {
      const { queryByText } = renderHeader();

      userEvent.click(queryByText('로그아웃'));

      expect(handleClickLogout).toBeCalled();
    });
  });
});
