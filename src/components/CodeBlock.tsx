import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock: React.FC<React.PropsWithChildren<any>> = (props) => {
  return (
    <SyntaxHighlighter language="javascript" style={coy}>
      {props.children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;