import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import Stars from 'react-native-stars';
import { Colors } from '../assets/Colors';
import * as BaseComponents from './BaseComponents';

export default function StoreInfo(storeRecord) {
  const norating = (
    <BaseComponents.BodyText style={{
      marginLeft: 10, color: '#E76A42',
    }}
    >
      No ratings yet
    </BaseComponents.BodyText>
  );
  return (
    <Container>
      <BoldHeader>{storeRecord.name}</BoldHeader>
      <AddressText>{storeRecord.address}</AddressText>
      <RatingContainer>
        <Stars
          display={storeRecord.rating}
          spacing={8}
          count={5}
          starSize={25}
          fullStar={require('@assets/images/starFilled.png')}
          emptyStar={require('@assets/images/starEmpty.png')}
          halfStar={require('@assets/images/starHalf.png')}
        />
        <Image
          style={{
            width: 15,
            height: 15,
            resizeMode: 'contain',
            marginLeft: 10,
          }}
          source={require('../assets/images/heatlh-rating.png')}
        />
        {(storeRecord.rating == 0) ? norating : null}
      </RatingContainer>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: column;
  height: 75px;
  width: 340px;
  margin-left: auto;
  margin-right: auto;
`;

const BoldHeader = styled(BaseComponents.LargeHeader)`
  text-align:left;
`;

const AddressText = styled(BaseComponents.AddressText)`
  text-align:left;
  color: ${Colors.textGray};
  margin-top: 5px;
`;

const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
