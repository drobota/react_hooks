import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

export type FormExampleProps = {
  firstName: string,
  lastName: string,
};

const useFormItem = (initialValue: string) => {
  const [ value, setValue ] = useState(initialValue);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.stopPropagation();
    e.preventDefault();
    setValue(e.target.value);
  };
  return {
    value,
    onChange: onValueChange,
  }
};

const useFocusInputOnMount = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect( () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return inputRef;
};

const FormExample: React.FunctionComponent<FormExampleProps> = (props) => {
  const firstName = useFormItem(props.firstName);
  const lastName = useFormItem(props.lastName);
  const inputRef = useFocusInputOnMount();
  
  return (
    <FormContainer>
      <FormItem>
        <Label>First Name:</Label>
        <Input {...firstName} ref={inputRef}/>
      </FormItem>
      <FormItem>
        <Label>Last Name:</Label>
        <Input {...lastName} />
      </FormItem>
    </FormContainer>
  );
};

const FormContainer = styled.form({
  margin: '3rem',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '2rem',
});

const FormItem = styled.div({
  display: 'flex',
  flexDirection: 'row',
  margin: '1rem',
});

const Label = styled.label({
  fontWeight: 'lighter',
  marginRight: '1rem',
});

const Input = styled.input({
  fontSize: '2rem'
});

export default FormExample;