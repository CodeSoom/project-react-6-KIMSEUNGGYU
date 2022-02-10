export default function PostContents({ post }) {
  const { contents } = post;

  return (
    <p>
      { contents }
    </p>
  );
}
