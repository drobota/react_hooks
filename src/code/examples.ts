

export const helloWorld = `
import * as React from 'react';

const HelloWorld: React.FunctionComponent = () => {
  return <div>HelloWorld</div>;
};

export default HelloWorld;
`;

export const helloWorldClass = `
import * as React from 'react';

class HelloWorld extends React.Component {
  render(): React.ReactElement {
    return <div>HelloWorld</div>;
  }
}

export default HelloWorld;
`;

export const useStateExample = `
const UseStateExample: React.FunctionComponent = () => {
  const [ name, setName ] = useState('Harry Potter');
  
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  
  return (
    <input value={name} onChange={onNameChange}/>
  );
};
`;

export const useEffectExample = `
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
    <div>{ clock.toTimeString() }</div>
  );
};
`;

export const testComponentExample =`
testComponentExample
`;

export const testHookExample =`
testComponentExample
`;

export const hookRulesExample =`
const BookForm: React.FunctionComponent = () => {
  /** Correct */
  const [ hero, setHero ] = useState('Harry Porter');

  /** Incorrect */
  if (hero !== '') {
    useEffect(
      () => console.log(hero)
    );
  };

  /** Correct */
  useEffect(() => {
    if (hero !== '') {
      console.log(hero)
    }
  });

  /** Incorrect */
  updateDocumentTitle(...);

  /** Correct */
  useDocumentTitle(...);
  
  /** Incorrect */
  const onHeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    useEffect(() => {
      document.title = e.target.value;
    });
  };

  /** Correct */
  const onHeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHero(e.target.value);
  };
  
  useEffect(() => {
    document.title = hero
  }, [hero]);
  
  return (...);
};
`;

export const testFormExampleBefore = `
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

export type FormExampleProps = {
  firstName: string,
  lastName: string,
};

const FormExample: React.FunctionComponent<FormExampleProps> = (props) => {
  const [ firstName, setFirstName ] = useState(props.firstName);
  const [ lastName, setLastName ] = useState(props.lastName);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
    
  }, []);
  
  const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.stopPropagation();
    setFirstName(e.target.value);
  };
  
  const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.stopPropagation();
    setLastName(e.target.value);
  };
  
  return (
    <form>
      <label>First Name:</label>
      <input value={firstName} onChange={onFirstNameChange} ref={inputRef}/>
      <label>Last Name:</label>
      <input value={lastName} onChange={onLastNameChange} />
    </form>
  );
};


export default FormExample;
`;

export const testFormExampleAfter = `
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

export type FormExampleProps = {
  firstName: string,
  lastName: string,
};

const useFormItem = (initialValue: string) => {
  const [ value, setValue ] = useState(initialValue);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.stopPropagation();
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
    <form>
      <label>First Name:</label>
      <input {...firstName} ref={inputRef}/>
      <label>Last Name:</label>
      <input {...lastName} />
    </form>
  );
};


export default FormExample;

`;

export const testFormExample =`
import * as React from 'react';
import { ReactWrapper, mount } from 'enzyme';

import FormExample, { FormExampleProps } from './FormExample';

describe('FormExample', () => {
  let props: FormExampleProps;
  let component: ReactWrapper;
  
  beforeEach(() => {
    props = {
      firstName = 'Harry',
      lastName = 'Potter',
    };
    component = mount(<FormExample { ...props } />);
  });
  
  afterEach(() => {
    component.unmount();
  });
  
  describe('Snapshots', () => {
    
    test('should render collapsed as expected', () => {
      expect(component).toMatchSnapshot();
    });
    
  });
  describe('Interaction', () => {
    
    test('should focus name input on mount', () => {
      const actual = document.activeElement;
      const expected = component
        .find('input')
        .first();
      expect(expected).toBe(actual);
    });
    
    test('should update first name', () => {
      const expected = 'Test name';
      component
        .find('input')
        .first()
        .simulate('change', { target: expected });
      const actual = component
        .find('input')
        .first()
        .value;
      expect(expected).toBe(actual);
    });
    
  });
});

`;