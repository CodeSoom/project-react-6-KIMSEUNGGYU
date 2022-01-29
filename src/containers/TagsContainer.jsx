import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import TagItem from '@components/TagItem';

import {
  loadTags,
  setSelectedTag,
} from '../modules/slice';

export default function TagsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTags());
  }, []);

  const { selectedTag, tags } = useSelector((state) => state);

  const handleClickSelectTag = (tagName) => {
    dispatch(setSelectedTag(tagName));
  };

  if (!tags.length) {
    return <p>등록된 태그가 없어요</p>;
  }

  return (
    <TagList>
      {tags.map(({ id, name }) => (
        <TagItem
          key={id}
          name={name}
          selectedTag={selectedTag}
          onClick={handleClickSelectTag}
        />
      ))}
    </TagList>
  );
}

const TagList = styled.ul`
  margin: 2rem 0;
  background-color : white;
  display: flex;
  border-radius: 5px;
  padding: 1rem;
`;
