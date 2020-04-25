import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '@assets/Colors';
import * as Fonts from '@assets/fonts/Fonts';

export default class CarouselCard extends React.Component<CardProps> {
  render() {
    return (
      <YellowCard />
    );
  }
}

export const YellowCard = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${Colors.Yellow};
  justify-content: flex-start;
  border-radius: 5px;
  padding: 5%;
  height: 190px;
`;
