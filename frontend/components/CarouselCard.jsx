import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '@assets/Colors';
import * as BaseComponents from '@components/BaseComponents';
import { Image, StyleSheet, requireNativeComponent } from 'react-native';

function getCardType(name) {
  const types = {
    smallbusiness: {
      title: 'Support local businesses!',
      imageUri: require('@assets/images/small-business.png'),
      body: 'Shop at smaller grocery stores to support local businesses. Often, those stores have shorter wait times and plentiful inventory!',
    },

    distance: {
      title: 'Maintain a safe distance',
      imageUri: require('@assets/images/social-distance.png'),
      body: 'Stores can still be crowded during peak shopping times - make sure to follow in-store guidelines and remain 6 feet apart!',
    },

    neighbors: {
      title: 'Check in on your neighbors',
      imageUri: require('@assets/images/neighbors.png'),
      body: 'Shop at smaller grocery stores to support local businesses. Often, those stores have shorter wait times and plentiful inventory!',
    },

    shoppinglist: {
      title: 'Have a shopping list ready',
      imageUri: require('@assets/images/list.png'),
      body: 'You’ll thank yourself later - minimize your time in store and make a list ahead of time!',
    },

    mask: {
      title: 'Bring a face covering',
      imageUri: require('@assets/images/mask.png'),
      body: 'In many counties, face coverings are required in all essential businesses. Bring a mask or homemade face covering to protect yourself and others!',
    },

    berkeleybowl: {
      title: 'Weekly spotlight: Berkeley Bowl',
      imageUri: require('@assets/images/berkeley-bowl.png'),
      body: 'Berkeley Bowl has been serving local communities with a wide selection of fresh foods since 1977. Check out one of their two locations in Berkeley!',
    },
  };
  return types[name];
}

export function CarouselCard(cardName) {
  const cardDetails = getCardType(cardName);

  return (
    <YellowCard>
      <Container>
        <TitleText>{cardDetails.title}</TitleText>
        <Image
          style={{
            width: 75,
            height: 75,
            resizeMode: 'contain',
          }}
          source={cardDetails.imageUri}
        />
        <BodyText>{cardDetails.body}</BodyText>
      </Container>
    </YellowCard>
  );
}


export const YellowCard = styled.View`
  display: flex;
  flex-direction: row;
  width: 90%;
  background-color: ${Colors.Yellow};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 190px;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;
`;

export const TitleText = styled(BaseComponents.SmallHeader)`
  text-align: center;
  margin-bottom: 5px;
`;

export const BodyText = styled(BaseComponents.BodyText)`
  text-align: center;
  margin-top: 5px;
`;
