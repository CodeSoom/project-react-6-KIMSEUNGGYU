import styled from '@emotion/styled';

export default function TagItem({ name, selectedTag, onClick }) {
  const tag = `#${name}`;

  return (
    <Item>
      <button
        type="button"
        className={tag === selectedTag ? 'active' : ''}
        onClick={() => onClick(tag)}
      >
        {tag}
      </button>
    </Item>
  );
}

const Item = styled.li`
  margin-right: 1rem;

  button {
    padding: .5rem;
    border: 1px solid #F7F7F7;
    background-color: #F7F7F7;
    border-radius: .5rem;
    font-size: 16px;
  }
  button:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.hover};
  }
  button.active {
    cursor: pointer;
    color: ${({ theme }) => theme.color.active};
    font-weight: bold;
  }
`;
