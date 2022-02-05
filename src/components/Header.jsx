import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import LogoImage from '@/images/logo.svg';

export default function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <img src={LogoImage} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">
            블로그
          </Link>
        </li>
        <li>
          <Link to="/series">
            시리즈
          </Link>
        </li>
        <li>로그인</li>
      </ul>
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

  ul {
    display: flex;
  }
  li {
    list-style: none;
    margin-left: 1rem;
    font-size: 1.8rem;
  }
`;
