import React from 'react';
import CountDown from 'react-native-countdown-component';

export class Timer extends React.Component {
  render() {
    return (
      <CountDown
        until={60 * 15}
        size={30}
        onFinish={() => alert('Sorry, your time has run out and your spot has been given to another person.')}
        digitStyle={{ backgroundColor: '#FFF' }}
        digitTxtStyle={{ color: '#2CB572' }}
        timeToShow={['M', 'S']}
        timeLabels={{ m: 'MM', s: 'SS' }}
      />
    );
  }
}
