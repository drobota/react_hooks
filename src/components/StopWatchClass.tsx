import * as React from 'react';
import styled from '@emotion/styled';

type TimerClassProps = {

}


type TimerClassState = {
  isRunning: boolean;
  counter: number;
};

class StopWatchClass extends React.Component<TimerClassProps, TimerClassState> {
  
  state: Readonly<TimerClassState> = {
    isRunning: false,
    counter: 0,
  };
  
  render(): React.ReactNode {
    const { isRunning } = this.state;
    return (
      <Container>
        <CounterContainer>00:00.00</CounterContainer>
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
              color={ LIGHT_GRREN }
              background={ DIRTY_GREEN }
              onClick={this.handleOnStartClick}
            >Start</Button>
          }
        </ButtonContainer>
      </Container>
    );
  }
  
  private readonly handleOnStartClick = () => {
    this.setState({
      isRunning: true,
    })
  };
  private readonly handleOnStopClick = () => {
    this.setState({
      isRunning: false,
    })
  };
  private readonly onLapClick = () => {
    if (this.state.isRunning) {
      console.log('running');
    }
  };
  private readonly onResetClick = () => {
    if (!this.state.isRunning) {
      console.log('resetting');
    }
  };
}

const GRAY = '#3d3d3d';
const BLACK= '#0d0d0d';
const DIRTY_WHITE = '#ececec';
const DIRTY_RED = '#381618';
const DARK_RED = '#d1413d';
const DIRTY_GREEN = '#1c2d1f';
const LIGHT_GRREN = '#7ce07b';


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

const Button = styled.button<{color?: string, background?: string}>({
  width: '5rem',
  height: '5rem',
  border: '.125rem solid gray',
  borderRadius: '3rem',
  fontSize: '1.5rem',
  outline: 'none',
  fontWeight: 'bold',
}, ({ color }) => {
    if (color) {
      return { color }
    } else {
      return { color: DIRTY_WHITE }
    }
}, ({ background }) => {
  if (background) {
    return { background }
  } else {
    return { background: GRAY }
  }
});

export default StopWatchClass;

