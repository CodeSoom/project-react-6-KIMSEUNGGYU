import styled from '@emotion/styled';

export default function Series({ series }) {
  const { title, subTitle } = series;

  return (
    <Wrapper>
      <div>
        <h2>
          {title}
        </h2>
        <p>
          {subTitle}
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.li(({ theme }) => ({
  marginTop: '2rem',
  width: '48%',
  background: theme.color.seriesBoxColor,
  padding: '1rem',
  textAlign: 'center',
  height: '330px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& h2': {
    color: theme.color.main,
    fontSize: '1.8rem',
  },

  '& p': {
    marginTop: '1rem',
    color: theme.color.hover,
    fontWeight: '600',
  },
}));
