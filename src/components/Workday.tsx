import * as React from 'react';
import { useDocumentTitle } from '../hooks';

// TODO: Rename into sth main page

const Workday: React.FC = () => {
  useDocumentTitle('Workday');
  
  return <div className="Workday-container">
    <img src='workday-logo.svg' />
    <div className="line"></div>
    <div className="title">React hooks</div>
    <div className="subtitle">Dmitriy & Agnes</div>
  </div>
};

export default Workday;