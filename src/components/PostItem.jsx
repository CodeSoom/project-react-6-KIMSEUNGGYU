export default function PostItem({ post }) {
  const {
    title, summary, contents, tags, createdAt,
  } = post;

  return (
    <li>
      {title}
      {' '}
      {createdAt}
      {' '}
      {summary ? <img src="/images/summary.svg" alt="summary" /> : ''}
      {' '}
      {contents}
      {' '}
      {tags}
    </li>
  );
}
