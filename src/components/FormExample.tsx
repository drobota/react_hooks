import * as React from 'react';
import { useState } from 'react';

export type FormExampleProps = {
  name: string,
  surname: string,
};

const FormExample: React.FunctionComponent<FormExampleProps> = (props) => {
  const [ name, setName ] = useState(props.name);
  const [ surname, setSurname ] = useState(props.name);
  
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };
  
  const onSurnameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSurname(e.target.value);
  };
  
  return (
    <form>
      <input value={name} onChange={onNameChange} />
      <input value={surname} onChange={onSurnameChange} />
    </form>
  );
};


export default FormExample;