import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '@assets/Colors';
import * as Fonts from '@assets/fonts/Fonts';
import * as BaseComponents from '@components/BaseComponents';
import { Image } from 'react-native';

function getCardType(name: string) {
  ['smallbusiness']: {
    title: 'Support local businesses!',
    imageUri: '@assets/images/small-business.png',
    body: 'Shop at smaller grocery stores to support local businesses. Often, those stores have shorter wait times and plentiful inventory!'
  }
}

export default class CarouselCard(cardType) extends React.Component<CardProps> {
  cardDetails = getCardType(cardType);

  render() {
    return (
      <YellowCard>
        <BaseComponents.SmallHeader>{cardDetails.title}</BaseComponents.SmallHeader>
        <Image
          style={width: 50,height: 50,}
          source={require({cardDetails.imageUri})}
        />
        <BaseComponents.BodyText>{cardDetails.body}</BaseComponents.BodyText>
      </YellowCard>
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
