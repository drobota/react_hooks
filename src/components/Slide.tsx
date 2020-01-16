import * as React from 'react';
import { useDocumentTitle } from "../hooks";
import styled from "@emotion/styled";

import { WORKDAY_BG_COLOR } from '../constants/colors';

interface SlideProps {
  title: string;
  children: React.ReactNode
}

const Slide: React.FC<SlideProps> = (props) => {
  useDocumentTitle(props.title);
  
  return (
    <Container>
      <Header className="header">{props.title}</Header>
      <Main>{props.children}</Main>
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
  background: WORKDAY_BG_COLOR,
  color: 'white',
  fontSize: '3.75rem',
  alignContent: 'center',
  justifyContent: 'center',
});

const Main = styled.main({
  margin: '2rem',
});

export default Slide;