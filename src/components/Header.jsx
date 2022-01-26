import styled from '@emotion/styled';

export default function Header() {
  return (
    <Wrapper>
      <img src="/images/logo.svg" alt="logo" />
      <ul>
        <li>블로그</li>
        <li>시리즈</li>
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
