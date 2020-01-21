import * as React from 'react';
import styled from '@emotion/styled';

type TimerClassProps = {
  /**
   * A delay in milliseconds
   */
  delay: number,
}

type TimerClassState = {
  isRunning: boolean;
  clock: number;
};

const addZero = (duration: number) => {
  if (duration > 9) {
    return duration;
  }
  return `0${ duration }`;
};

const convertTime = (duration: number): string => {
  const milliseconds = addZero(parseInt(`${ duration % 1000 / 10 }`));
  const seconds = addZero(parseInt(`${ duration / 1000 % 60 }`));
  const minutes = addZero(parseInt(`${ duration / (1000 * 60) % 60 }`));
  return `${ minutes }:${ seconds }.${ milliseconds }`;
};

class StopWatchClass extends React.Component<TimerClassProps, TimerClassState> {
  // @ts-ignore
  private intervalId: NodeJS.Timeout;
  
  state: Readonly<TimerClassState> = {
    isRunning: false,
    clock: 0,
  };
  
  static defaultProps: Readonly<TimerClassProps> = {
    delay: 100,
  };
  
  render(): React.ReactNode {
    const { isRunning } = this.state;
    return (
      <Container>
        <CounterContainer>{ this.getTime() }</CounterContainer>
        <ButtonContainer>
          { isRunning
            ?
            <Button
              onClick={ this.onLapClick }
            >Lap</Button>
            :
            <Button
              onClick={ this.onResetClick }
            >Reset</Button>
          }
          { isRunning
            ?
            <Button
              color={ DARK_RED }
              background={ DIRTY_RED }
              onClick={ this.handleOnStopClick }
            >Stop</Button>
            :
            <Button
              color={ LIGHT_GREEN }
              background={ DIRTY_GREEN }
              onClick={ this.handleOnStartClick }
            >Start</Button>
          }
        </ButtonContainer>
      </Container>
    );
  }
  
  componentDidUpdate(prevProps: Readonly<TimerClassProps>, prevState: Readonly<TimerClassState>): void {
    if (!prevState.isRunning && this.state.isRunning) {
      this.intervalId = setInterval( this.tick, this.props.delay);
    }
  }
  
  componentWillMount(): void {
    this.stopTimer();
  }
  
  private readonly tick = () => {
    this.setState({
      clock: this.state.clock + this.props.delay,
    });
  };
  
  private readonly handleOnStartClick = () => {
    this.setState({
      isRunning: true,
    });
  };
  
  private readonly handleOnStopClick = () => {
    this.stopTimer();
    
    this.setState({
      isRunning: false,
    });
  };
  
  private readonly onLapClick = () => {
    if (this.state.isRunning) {
      console.log('running');
    }
  };
  
  private readonly onResetClick = () => {
    this.setState({
      isRunning: false,
      clock: 0,
    });
  };
  
  private readonly stopTimer = () => {
    clearInterval(this.intervalId);
  };
  
  private readonly getTime = () => {
    return convertTime(this.state.clock);
  }
  
}

const GRAY = '#3d3d3d';
const BLACK = '#0d0d0d';
const DIRTY_WHITE = '#ececec';
const DIRTY_RED = '#381618';
const DARK_RED = '#d1413d';
const DIRTY_GREEN = '#1c2d1f';
const LIGHT_GREEN = '#7ce07b';


const Container = styled.div({
  width: '25rem',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: BLACK,
});

const CounterContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  color: DIRTY_WHITE,
  fontSize: '5rem',
  marginBottom: '1rem',
});

const ButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
});

const Button = styled.button<{ color?: string, background?: string }>({
  width: '5rem',
  height: '5rem',
  border: '.125rem solid gray',
  borderRadius: '3rem',
  fontSize: '1.5rem',
  outline: 'none',
  fontWeight: 'bold',
}, ({ color }) => {
  if (color) {
    return { color };
  } else {
    return { color: DIRTY_WHITE };
  }
}, ({ background }) => {
  if (background) {
    return { background };
  } else {
    return { background: GRAY };
  }
});

export default StopWatchClass;