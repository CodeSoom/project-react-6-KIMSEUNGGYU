import Header from '@components/Header';

import useKakaoLogin from '../hooks/useKakaoLogin';

export default function HeaderContainer() {
  const {
    isLogin,
    kakaoLogin,
    kakaoLogout,
  } = useKakaoLogin();

  return (
    <Header
      isLogin={isLogin}
      onLogin={kakaoLogin}
      onLogout={kakaoLogout}
    />
  );
}
