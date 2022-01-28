import styled from '@emotion/styled';

export default function TagItem({ name, onClick }) {
  const tag = `#${name}`;

  return (
    <Item>
      <button
        type="button"
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
    color: #1890FF;
    font-weight: bold;
    font-size: 16px;
  }
  button:hover {
    cursor: pointer;
    color: #40a9ff;
  }
  button:active {
    cursor: pointer;
    color: #096dd9;
  }
`;
