import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Stars from 'react-native-stars';
import styled from 'styled-components/native';
import LongBottomCardContainer from '@components/LongBottomCardContainer';
import * as BaseComponents from '../components/BaseComponents';
import { Colors } from '../assets/Colors';
import { Timer } from '../components/Timer';

export class Countdown extends React.Component {
  render() {
    const { storeRecord, userRecord } = this.props.route.params;
    return (
      <Background>
        <TimerBox>
          <TimerText>
            Your spot is almost ready! be ready to show this screen to the store attendant.
          </TimerText>
          <Timer />
        </TimerBox>
        <LongBottomCardContainer storeRecord={storeRecord} />
      </Background>
    );
  }
}

export const Background = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.Green};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TimerText = styled(BaseComponents.SmallHeader)`
  color: #ffffff;
  text-align: center;
  width: 80%;
  margin-bottom: 20px;
`;

export const TimerBox = styled.View`
  width: 100%;
  height: 50%;
  background-color: ${Colors.Green};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
