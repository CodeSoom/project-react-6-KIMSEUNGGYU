import styled from '@emotion/styled';

import { Link, NavLink } from 'react-router-dom';

import LogoImage from '@/images/logo.svg';

export default function Header({ isLogin, onLogin, onLogout }) {
  return (
    <Wrapper>
      <Link to="/">
        <img src={LogoImage} alt="logo" />
      </Link>
      <nav>
        <li>
          <StyledNavLink to="/">
            블로그
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/series">
            시리즈
          </StyledNavLink>
        </li>
        {
          isLogin
            ? (
              <li>
                <button
                  type="button"
                  onClick={onLogout}
                >
                  로그아웃
                </button>
              </li>
            )
            : (
              <li>
                <button
                  type="button"
                  onClick={onLogin}
                >
                  로그인
                </button>
              </li>
            )
        }
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;

  img:hover {
    cursor: pointer;
  }

  nav {
    display: flex;
  }

  li {
    list-style: none;
    margin-left: 1rem;
    font-size: 1.7rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.hover};
  }
  &.active {
    color: ${({ theme }) => theme.color.active};
  }
`;
