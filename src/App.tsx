import React, { useState } from 'react';
import './App.css';
import Workday from './components/Workday';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import BulletedList from './components/BulletedList';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Navigation>
        <Slide title="Agenda" key="Agenda">
          <BulletedList
            title="Components"
            items={[
              'Class component',
              'Functional component',
              'Differencess'
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
        <Workday />
        <Slide title="Questions" key="Questions">
          <div>Questions</div>
        </Slide>
      </Navigation>
    </div>
  );
};

export default App;
