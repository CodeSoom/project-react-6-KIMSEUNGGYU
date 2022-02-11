import styled from '@emotion/styled';

export default function PostInfo({ post }) {
  const { title, createdAt, tags } = post;

  return (
    <Wrapper>
      <h1>
        {title}
      </h1>
      <p>
        {createdAt}
      </p>
      <ul>
        {tags.map((tag) => (
          <li key={title + tag}>
            {`#${tag}`}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div(({ theme }) => ({
  background: 'white',
  marginTop: '3rem',

  p: {
    marginTop: '0.5rem',
    color: theme.color.primaryText,
  },

  ul: {
    marginTop: '0.5rem',
    color: theme.color.main,
    fontWeight: 'bold',
  },
}));
