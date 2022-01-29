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
  list-style: none;
  margin-right: 1rem;

  button {
    all: unset; 
    padding: .5rem;
    border: 1px solid #F7F7F7;
    background-color: #F7F7F7;
    border-radius: .5rem;
    color: ${(props) => props.theme.color.main};
    /* color: ${({ theme }) => theme.color.main}; */
    font-weight: bold;
    font-size: 16px;
  }
  button:hover {
    cursor: pointer;
    color: #40a9ff;
  }
  button.active {
    cursor: pointer;
    color: #096dd9;
    border: 1px solid #096dd9;
  }
`;
