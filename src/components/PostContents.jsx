import ReactMarkdown from 'react-markdown';

export default function PostContents({ post }) {
  const { contents } = post;

  return (
    <ReactMarkdown>
      {contents}
    </ReactMarkdown>
  );
}
