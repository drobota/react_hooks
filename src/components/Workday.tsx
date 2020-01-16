import * as React from 'react';
import styled from '@emotion/styled';
import { useDocumentTitle } from '../hooks';

import { WORKDAY_BG_COLOR } from '../constants/colors';


// TODO: Rename into sth main page

const Workday: React.FC = () => {
  useDocumentTitle('Workday');
  
  return <Container>
    <Image src='workday-logo.svg' />
    <Line />
    <Title>React hooks</Title>
    <Subtitle>Dmitriy & Agnes</Subtitle>
  </Container>
};

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  flex: 1,
  backgroundColor: WORKDAY_BG_COLOR,
});

const Image = styled.img({
  width: '50%',
  backgroundColor: WORKDAY_BG_COLOR,
  marginBottom: '3rem'
});

const Line = styled.div({
  height: '0.35rem',
  width: '40%',
  backgroundColor: 'rgb(124, 152, 181)',
  border: '1px solid rgb(69, 112, 158)',
  marginBottom: '2rem',
});

const Title = styled.div({
  color: 'white',
  marginBottom: '0.25rem',
  fontSize: '4rem'
});

const Subtitle = styled.div({
  color: 'white',
  fontSize: '2rem',
  marginBottom: '1rem'
});

export default Workday;