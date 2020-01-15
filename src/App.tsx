import React, { useState } from 'react';
import './App.css';
import Workday from "./components/Workday";
import Slide from "./components/Slide";
import Navigation from "./components/Navigation";


const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Navigation>
        <Workday />
        <Slide title="Agenda" key="Agenda">
          <div>Agenda</div>
        </Slide>
        <Slide title="Questions" key="Questions">
          <div>Questions</div>
        </Slide>
      </Navigation>
    </div>
  );
};

export default App;
