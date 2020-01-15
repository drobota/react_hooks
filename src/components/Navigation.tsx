import * as React from 'react';
import { useEffect, useReducer } from 'react';

const DEFAULT_TIMEOUT = 3000;

type IsPlaying = {
  isPlaying: boolean;
}

type CurrentIndex = {
  currentIndex: number;
}

type NavigationAction =
  | { type: 'GO_BACK', total: number }
  | { type: 'GO_FORWARD', total: number }
  | { type: 'PLAY' }

interface NavigationProps {
  children: Array<JSX.Element>;
}

type NavigationState = IsPlaying & CurrentIndex & {};

const reducer = (state: NavigationState, action: NavigationAction) => {
  switch (action.type) {
    case 'GO_BACK':
      return {
        ...state,
        currentIndex: (action.total + state.currentIndex - 1) % action.total,
      };
    case 'GO_FORWARD':
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % action.total,
      };
    case 'PLAY':
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    default:
      return state;
  }
};

const initialState: NavigationState = {
  currentIndex: 0,
  isPlaying: false,
};

const Navigation: React.FunctionComponent<NavigationProps> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    if (state.isPlaying) {
      const total = props.children.length;
      const intervalId = setInterval(
        () => dispatch({type: 'GO_FORWARD', total}),
        DEFAULT_TIMEOUT
      );
      return () => {
        clearInterval(intervalId);
      }
    }
  }, [state.isPlaying]);
  
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const total = props.children.length;
      switch (event.code) {
        case 'ArrowLeft':
          dispatch({type: 'GO_BACK', total});
          break;
        case 'ArrowRight':
          dispatch({type: 'GO_FORWARD', total});
          break;
        case 'KeyP':
          dispatch({type: 'PLAY'});
      }
    };
    
    window.addEventListener('keydown', onKeyDown);
    
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [state.currentIndex]);
  
  return props.children[state.currentIndex];
  
};

export default Navigation;