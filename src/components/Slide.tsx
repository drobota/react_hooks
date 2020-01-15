import * as React from 'react';
import { useDocumentTitle } from "../hooks";
import styled from "@emotion/styled";

interface SlideProps {
  title: string;
  children: React.ReactNode
}

const Slide: React.FC<SlideProps> = (props) => {
  useDocumentTitle(props.title);
  
  return (
    <Container>
      <Header className="header">{props.title}</Header>
      <main>{props.children}</main>
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
});

const Header = styled.header({
  display: 'flex',
  height: '8rem',
  lineHeight: '8rem',
  background: '#3072b9',
  color: 'white',
  fontSize: '3.75rem',
  alignContent: 'center',
  justifyContent: 'center',
});


export default Slide;