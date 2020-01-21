

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