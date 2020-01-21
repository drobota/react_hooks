import * as React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';


const UseStateExample: React.FunctionComponent = () => {
  const [name, setName] = useState('Harry Potter');
  
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setName(e.target.value);
  };
  
  return (
    <Container>
      <Input value={ name } onChange={ onNameChange }/>
    </Container>
  );
};


const Container = styled.div({
  margin: '3rem'
});

const Input = styled.input({
  fontSize: '2rem'
});

export default UseStateExample;