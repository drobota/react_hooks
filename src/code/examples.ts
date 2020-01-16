

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