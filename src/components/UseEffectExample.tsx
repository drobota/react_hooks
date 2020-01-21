import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';


const UseStateExample: React.FunctionComponent = () => {
  const initialState = new Date();
  const [ clock, setClock ] = useState(initialState);
  
  useEffect(() => {
    const intervalID = setInterval(() => {
      const time = new Date();
      setClock(time);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  });
  
  return (
    <Container>{ clock.toTimeString() }</Container>
  );
};


const Container = styled.div({
  margin: '3rem',
  fontSize: '2rem'
});

export default UseStateExample;