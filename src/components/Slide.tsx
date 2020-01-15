import * as React from 'react';
import { useEffect } from "react";

interface SlideProps {
  title: string;
  children: React.ReactNode
}

const Slide: React.FC<SlideProps> = (props) => {
  useEffect( () => {
    document.title = props.title;
  });
  
  return <div className="slide-container">
    <header className="header">{props.title}</header>
    <main>{props.children}</main>
  </div>
};

export default Slide;