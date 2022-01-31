import styled from '@emotion/styled';

export default function PostItem({ post }) {
  const {
    title, summary, contents, tags, createdAt,
  } = post;

  return (
    <Item>
      <div>
        <div>
          <Title>{title}</Title>
          <CreatedAt>{createdAt}</CreatedAt>
        </div>
        {summary && (
          <img
            src="/images/summary.svg"
            alt="summary"
          />
        )}
      </div>
      <Contents>
        <span>
          {contents}
        </span>
      </Contents>
      <Tags>
        {tags.map((tag) => (
          <li key={`${tag}`}>
            <p>
              {`#${tag}`}
            </p>
          </li>
        ))}
      </Tags>
    </Item>
  );
}

const Item = styled.li`
  list-style: none;
  background-color: white;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.main};
  }

  & div {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    img {
      width: 1rem;
      height: 1rem;
      position: absolute;
      top: 0;
      right: 0;
    }
    img:hover {
      cursor: pointer;
      filter: ${({ theme }) => theme.color.mainSVG};
    }
  }
`;

const Title = styled.h2`
  margin-right: 1rem;
  color: ${({ theme }) => theme.color.title};
`;

const CreatedAt = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.color.primaryText};
`;

const Contents = styled.div`
  margin-top: .5rem;

  & span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: ${({ theme }) => theme.color.primaryText};
  }
`;

const Tags = styled.ul`
  margin-top: .5rem;

  p {
    color: ${({ theme }) => theme.color.main};
  }
`;
