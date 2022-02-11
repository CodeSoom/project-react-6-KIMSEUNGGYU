import styled from '@emotion/styled';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomOneLight from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-light';

import javascript from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import css from 'react-syntax-highlighter/dist/cjs/languages/hljs/css';
import html from 'react-syntax-highlighter/dist/cjs/languages/hljs/htmlbars';
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json';
import python from 'react-syntax-highlighter/dist/cjs/languages/hljs/python';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('jsx', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('tsx', typescript);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('html', html);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('python', python);

const SyntaxWrapper = styled(SyntaxHighlighter)`
  background-color:#f7f6f3 !important;
 
  & code {
    color: rgb(55, 53, 47) !important;
    font-size: 1rem;
  }
`;

const code = ({
  inline, className, children,
}) => {
  const match = /language-(\w+)/.exec(className || '');

  return !inline && match ? (
    <SyntaxWrapper
      style={atomOneLight}
      language={match[1]}
      PreTag="div"
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxWrapper>
  ) : (
    <code className={className}>
      {String(children).replace(/\n$/, '')}
    </code>
  );
};

export default code;
