// TODO
// 1. load 되면 tags 정보를 요청한다 (api 요청)
// 2. 성공적으로 요청이 되면, tags 정보를 전역으로 저장한다.
//

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  loadTags,
} from '../modules/slice';

function Tags() {
  return (
    <ul>
      <li>
        <button type="button">
          태그1
        </button>
      </li>
      <li>
        <button type="button">
          태그2
        </button>
      </li>
      <li>
        <button type="button">
          태그3
        </button>
      </li>
    </ul>
  );
}

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
        <li key={id}>
          <button type="button">
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
