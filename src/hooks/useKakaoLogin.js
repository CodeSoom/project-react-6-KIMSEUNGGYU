import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setIsLogin } from '@modules/slice';

const jskey = 'a90812cac2fa2c5f8aa3d339d0480038';

function useKakaoLogin() {
  const { Kakao } = window;

  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state);

  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(jskey);
    }

    const token = Kakao.Auth.getAccessToken();

    if (token) {
      dispatch(setIsLogin(true));
    }
  }, []);

  const kakaoLogin = () => {
    Kakao.Auth.login({
      success: (response) => {
        Kakao.Auth.setAccessToken(response.access_token);
        dispatch(setIsLogin(true));
      },
      fail: (error) => {
        alert('로그인 실패');
        console.error(error);
      },
    });
  };

  function kakaoLogout() {
    Kakao.Auth.logout(() => {
      dispatch(setIsLogin(false));
    });
  }

  return {
    isLogin,
    kakaoLogin,
    kakaoLogout,
  };
}

export default useKakaoLogin;
