import { useSelector } from 'react-redux';

import Series from '@components/Series';

export default function SeriesContainer() {
  const { series } = useSelector((state) => state);

  if (!series.length) {
    return (
      <p>시리즈가 없습니다.</p>
    );
  }

  return (
    <ul>
      {series
        .map((item) => (
          <li key={item.id}>
            <Series series={item} />
          </li>
        ))}
    </ul>
  );
}
