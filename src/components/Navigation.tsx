import * as React from 'react';
import { useState, useEffect } from 'react';


interface NavigationProps {
  children: Array<JSX.Element>;
}

const Navigation: React.FunctionComponent<NavigationProps> = (props) => {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const count = props.children.length;
      let index;
      switch (event.code) {
        case 'ArrowLeft':
          index = (count + currentIndex - 1) % count;
          setCurrentIndex(index);
          break;
        case 'ArrowRight':
          index = (currentIndex + 1) % (count);
          setCurrentIndex(index);
          break;
      }
    };
    
    window.addEventListener('keydown', onKeyDown);
    
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [currentIndex]);

  return props.children[currentIndex];
  
};

export default Navigation;