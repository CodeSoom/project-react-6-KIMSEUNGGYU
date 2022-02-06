export default function Series({ series }) {
  const { title, subTitle } = series;

  return (
    <>
      <h2>
        {title}
      </h2>
      <p>
        {subTitle}
      </p>
    </>
  );
}
