import React, { useState } from 'react';
import './App.css';
import Workday from './components/Workday';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import BulletedList from './components/BulletedList';
import CodeBlock from './components/CodeBlock';
import UseStateExample from './components/UseStateExample';
import UseEffectExample from './components/UseEffectExample';

import * as examples from './code/examples';
import FormExample from './components/FormExample';

const App: React.FunctionComponent = () => {
  return (
    <div className='App'>
      <Navigation>
        <Workday/>
        <Slide title='Agenda' key='Agenda'>
          <BulletedList
            title='React components'
            items={ [
              'Types of components',
            ] }
          />
          <BulletedList
            title='React Hooks'
            items={ [
              'Built-in hooks',
              'useState',
              'useEffect',
              'How to write own hook',
              'Rules of hooks',
              'How to test hooks',
              'Third party hooks'
            ] }
          />
          <BulletedList title='Questions'/>
        </Slide>
        <Slide title='Types of components'>
          <BulletedList title={ 'Class component' }/>
          <CodeBlock>{ examples.helloWorldClass }</CodeBlock>
          <BulletedList title={ 'Functional component' }/>
          <CodeBlock>{ examples.helloWorld }</CodeBlock>
        </Slide>
        <Slide title={ 'Hooks' }>
          <BulletedList
            title={ 'Basic hooks' }
            items={ [
              'useState',
              'useEffect',
              'useContext'
            ] }
          />
          <BulletedList
            title={ 'Additional hooks' }
            items={ [
              'useReducer',
              'useCallback',
              'useMemo',
              'useRef',
              'useImperativeHandle',
              'useLayoutEffect',
              'useDebugValue',
            ] }
          />
        </Slide>
        <Slide title={ 'useState' }>
          <CodeBlock>
            { examples.useStateExample }
          </CodeBlock>
          <UseStateExample/>
        </Slide>
        <Slide title={ 'useEffect' }>
          <CodeBlock>
            { examples.useEffectExample }
          </CodeBlock>
          <UseEffectExample/>
        </Slide>
        <Slide title='Rules of hooks'>
          <BulletedList
            title='Only call hooks at the Top Level'
          />
          <BulletedList
            title='Only call hooks from react functions'
            items={ [
              'Call hooks from react function components',
              'Call hooks from custom hooks'
            ] }
          />
          <BulletedList
            title={ 'Don\'t call hooks' }
            items={ [
              'Inside loops',
              'Inside conditions',
              'Nested functions',
            ] }
          />
          <BulletedList
            title={ 'Lints' }
            items={ [
              'eslint-plugin-react-hooks',
              'tslint-react-hooks'
            ] }
          />
        </Slide>
        <Slide title={ 'Rules of hooks' }>
          <CodeBlock>
            { examples.hookRulesExample }
          </CodeBlock>
        </Slide>
        <Slide title={ 'How to test' }>
          <CodeBlock>
            { examples.testFormExampleBefore }
          </CodeBlock>
          <FormExample firstName={ 'Harry' } lastName={ 'Potter' }/>
        </Slide>
        <Slide title={ 'How to test' }>
          <CodeBlock>
            { examples.testFormExampleAfter }
          </CodeBlock>
        </Slide>
        <Slide title={ 'How to test' }>
          <CodeBlock>
            { examples.testFormExample }
          </CodeBlock>
        </Slide>
        <Slide title={ 'Third party hooks' }>
          <BulletedList
            title={ 'react-use' }
            items={ [
              'Sensors',
              'UI',
              'Animations',
              'Side-effects',
              'Lifecycle',
              'State',
            ] }
          />
        </Slide>
        <Slide title='Questions'>
        </Slide>
      </Navigation>
    </div>
  );
};

export default App;
