export default function PostInfo({ post }) {
  const { title, createdAt, tags } = post;

  return (
    <>
      {title}
      {' '}
      {createdAt}
      {' '}
      <ul>
        {tags.map((tag) => (
          <li key={title + tag}>
            {`#${tag}`}
          </li>
        ))}
      </ul>
    </>
  );
}
