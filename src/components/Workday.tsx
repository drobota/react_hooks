import * as React from 'react';
import { useEffect } from "react";

// TODO: Rename into sth main page

const Workday: React.FC = () => {
  useEffect(() => {
    document.title = 'Workday';
  });
  
  return <div className="Workday-container">
    <img src='workday-logo.svg' />
    <div className="line"></div>
    <div className="title">React hooks</div>
    <div className="subtitle">Dmitriy & Agnes</div>
  </div>
};

export default Workday;