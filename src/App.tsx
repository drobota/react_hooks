import React, { useState } from 'react';
import './App.css';
import Workday from './components/Workday';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import BulletedList from './components/BulletedList';
import CodeBlock from './components/CodeBlock';
import * as examples from './code/examples';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Navigation>
        <Workday />
        <Slide title="Agenda" key="Agenda">
          <BulletedList
            title="Components"
            items={[
              'Class component',
              'Functional component',
              'Difference'
            ]}
          />
          <BulletedList
            title="React Hooks"
            items={[
              'Build-in hooks',
              'useEffect',
              'How to write own hook',
              'Rules of hooks',
              'How to test hooks',
              'Third party hooks'
            ]}
          />
          <BulletedList title="Questions" />
        </Slide>
        <Slide title="Class component" key="Class component">
          <CodeBlock>{ examples.helloWorldClass }</CodeBlock>
        </Slide>
        <Slide title="Functional component" key="Class component">
          <CodeBlock>{ examples.helloWorld }</CodeBlock>
        </Slide>
        <Slide title="Questions" key="Questions">
          <div>Questions</div>
        </Slide>
      </Navigation>
    </div>
  );
};

export default App;
