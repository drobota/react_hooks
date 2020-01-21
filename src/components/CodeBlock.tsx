import * as React from 'react';
import styled from '@emotion/styled';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock: React.FC<React.PropsWithChildren<any>> = (props) => {
  return (
    <Container>
      <SyntaxHighlighter language="javascript" style={darcula}>
        {props.children}
      </SyntaxHighlighter>
    </Container>
  );
};

const Container = styled.div({
  marginLeft: '3rem',
  '> pre': {
    borderRadius: '1rem'
  }
});

export default CodeBlock;