import ReactMarkdown from 'react-markdown';

import styled from '@emotion/styled';

import components from '@plugins/';

export default function PostContents({ post }) {
  const { contents } = post;

  return (
    <Wrapper>
      <ReactMarkDownWrapper components={components}>
        {contents}
      </ReactMarkDownWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div({
  marginTop: '3rem',
  marginBottom: '5rem',
});

// POST contents style
const ReactMarkDownWrapper = styled(ReactMarkdown)(({ theme }) => ({
  width: '100%',
  fontSize: '1rem',

  h1: {
    marginTop: '32px',
    marginBottom: '4px',
    fontSize: '30px',
    fontWeight: 'bold',
  },
  h2: {
    marginTop: '22.4px',
    marginBottom: '1px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  h3: {
    marginTop: '16px',
    marginBottom: '1px',
    fontSize: '20px',
    fontWeight: 'bold',
  },

  ul: {
    li: {
      listStyle: 'disc',
      marginLeft: '1.7rem',
      padding: '3px 2px',
    },
  },

  ol: {
    li: {
      listStyle: 'disc',
      marginLeft: '1.7rem',
      padding: '3px 2px',
    },
  },

  p: {
    margin: 0,
    padding: '3px 2px',
  },

  'p code': {
    backgroundColor: 'rgb(247, 246, 243)',
    color: 'rgb(235, 87, 87)',
    padding: '2.72px 5.4px',
    borderRadius: '4px',
    fontSize: '0.85rem',
  },

  '& img': {
    display: 'block',
    margin: '0 auto',
    padding: '1em 0',
    maxWidth: '100%',
  },
  '& img:hover': {
    cursor: 'pointer',
  },

  a: {
    color: theme.color.A_LINK,
    textDecoration: 'underline',
  },
  'a:hover': {
    cursor: 'pointer',
  },
}));
