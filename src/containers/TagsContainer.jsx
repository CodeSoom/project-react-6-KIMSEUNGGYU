import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  loadTags,
} from '../modules/slice';

import TagItem from '../components/TagItem';

export default function TagsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTags());
  }, []);

  const { tags } = useSelector((state) => state);

  if (!tags.length) {
    return <p>등록된 태그가 없어요</p>;
  }

  return (
    <ul>
      {tags.map(({ id, name }) => (
        <TagItem
          key={id}
          name={name}
        />
      ))}
    </ul>
  );
}
