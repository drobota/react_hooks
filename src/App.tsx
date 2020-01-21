import React, { useState } from 'react';
import './App.css';
import Workday from './components/Workday';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import BulletedList from './components/BulletedList';
import CodeBlock from './components/CodeBlock';
import StopWatchClass from './components/StopWatchClass'
import * as examples from './code/examples';

const App: React.FunctionComponent = () => {
  return (
    <div className='App'>
      <Navigation>
        <StopWatchClass />
        <Workday />
        <Slide title='Agenda' key='Agenda'>
          <BulletedList
            title='React components'
            items={[
              'Types of components',
            ]}
          />
          <BulletedList
            title='React Hooks'
            items={[
              'Built-in hooks',
              'useState',
              'useEffect',
              'How to write own hook',
              'Rules of hooks',
              'How to test hooks',
              'Third party hooks'
            ]}
          />
          <BulletedList title='Questions' />
        </Slide>
        <Slide title='Types of components'>
          <BulletedList title={'Class component'} />
          <CodeBlock>{ examples.helloWorldClass }</CodeBlock>
          <BulletedList title={'Functional component'} />
          <CodeBlock>{ examples.helloWorld }</CodeBlock>
        </Slide>
        <Slide title='Rules of hooks'>
          <BulletedList
            title='Only call hooks at the Top Level'
          />
          <BulletedList
            title='Only call hooks from react functions'
            items={[
              'Call hooks from react function components',
              'Call Hooks from custom hooks'
            ]}
          />
          <BulletedList
            title={'Don\'t call hooks'}
            items={[
              'Inside loops',
              'Inside conditions',
              'Nested functions',
            ]}
          />
          <BulletedList
            title={'Lints'}
            items={[
              'eslint-plugin-react-hooks',
              'tslint-react-hooks'
            ]}
          />
        </Slide>
        <Slide title='Questions'>
          <div>Questions</div>
        </Slide>
      </Navigation>
    </div>
  );
};

export default App;
