import { useState } from 'react';

import styled from '@emotion/styled';

import OpenIcon from '@/images/open.svg';
import CloseIcon from '@/images/close.svg';

export default function Series({ series }) {
  const [toggle, setToggle] = useState(false);

  const { title, subTitle, items } = series;

  return (
    <Wrapper>
      <SeriesInfoWrapper>
        <SeriesInfo>
          <h2>
            {title}
          </h2>
          <p>
            {subTitle}
          </p>
          {!toggle && (
            <ToggleIcon>
              <img
                role="presentation"
                src={OpenIcon}
                alt="open"
                onClick={() => setToggle(!toggle)}
              />
            </ToggleIcon>
          )}
        </SeriesInfo>
      </SeriesInfoWrapper>
      {toggle
      && (
        <SeriesPosts>
          {items.map((item) => (
            <li key={item.title}>
              {item.title}
            </li>
          ))}
          <ToggleIcon>
            <img
              role="presentation"
              src={CloseIcon}
              alt="close"
              onClick={() => setToggle(!toggle)}
            />
          </ToggleIcon>
        </SeriesPosts>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div({
  width: '48%',
  marginTop: '2rem',
});

const SeriesInfoWrapper = styled.div(({ theme }) => ({
  position: 'relative',
  height: '300px',
  background: theme.color.seriesBoxColor,
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}));

const SeriesInfo = styled.div(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

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

const ToggleIcon = styled.div({
  position: 'absolute',
  bottom: '1rem',
  right: '1rem',

  img: {
    width: '1rem',
  },

  'img:hover': {
    cursor: 'pointer',
  },
});

const SeriesPosts = styled.div(({ theme }) => ({
  background: 'white',
  margin: '0',
  width: '100%',
  padding: '30px 25px',
  fontSize: '20px',
  position: 'relative',

  li: {
    listStyle: 'decimal',
  },

  'li:hover': {
    cursor: 'pointer',
    color: theme.color.hover,
  },
}));
